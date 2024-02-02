import { Button, Container, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { authenticate } from '../../api/authenticationApi';
import { fetchAll, save, sign } from '../../api/petitionsApi';
import { useState } from 'react';
import { Navigate, redirect } from 'react-router-dom/dist';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/authenticationActions';

const Login = () => {

    const [user, setUser] = useState('');
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);

        dispatch(login(data));

        // const authResponse = await authenticate(data);
        // let parsedToken = parseJwt(authResponse.jwt);
        // console.log(parsedToken);
        // if (authResponse.username === 'user') {
        //     setUser(authResponse.username);
        // }
        // const petitions = await fetchAll();
        // console.log(petitions);
    };

    function parseJwt(token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }

    return (
        <>
            {user === 'user' ? (<Navigate to='/' />) : ""}
            <Container
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyItems: 'center',
                    backgroundColor: '#607d8b',
                    padding: '20px',
                    borderRadius: '8px',
                    marginTop: '10vh',
                    width: '40vw'
                }}
            >
                <Controller
                    name="username"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Username"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                            sx={{ marginBottom: '10px', '& label': { color: '#d3d3d3' }, '& input': { color: 'black' } }}
                        />
                    )}
                />

                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Password"
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                            sx={{ marginBottom: '10px', '& label': { color: '#d3d3d3' }, '& input': { color: 'black' } }}
                        />
                    )}
                />

                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </Container>
            {/* <form onSubmit={handleSubmit((data) => console.log(data))} style={{ backgroundColor: '#282c34' }}>
                <input {...register('username', { required: true })} />
                <input {...register('password', { required: true })} />
                {errors.username && <p>Enter username</p>}
                {errors.password && <p>Enter password</p>}
                <input type="submit" />
            </form> */}
        </>
    );
};

export default Login;