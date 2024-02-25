import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../redux/actions/authenticationActions';

const Navbar = () => {
    const username = useSelector((state) => state?.authentication?.value?.username);

    const renderLoginButton = () => {
        const dispatch = useDispatch();
        if (username === '' || username === undefined) {
            return <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Typography variant="h6" sx={{ flexGrow: 1, padding: '0.3vw', backgroundColor: '#36454F', color: '#7A9FCE', border: 'solid', borderRadius: '25% 10%' }}>
                    <Link to="/login" style={{ color: '#B2BEB5' }}>Login</Link>
                </Typography>
                <Typography variant="h6" sx={{ flexGrow: 1, padding: '0.3vw', backgroundColor: '#36454F', color: '#7A9FCE', border: 'solid', borderRadius: '25% 10%' }}>
                    <Link to="/register" style={{ color: '#B2BEB5' }}>Register</Link>
                </Typography>
            </Box>;
        } else {
            return (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <Typography variant="h6">{username}</Typography>
                    
                        <Typography variant="h6" sx={{ flexGrow: 1, padding: '0.3vw', backgroundColor: '#36454F', color: '#7A9FCE', border: 'solid', borderRadius: '25% 10%' }}
                            onClick={() => dispatch(logoutUser())}>
                            Logout
                        </Typography>
                    
                </Box>);
        }
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#818589' }}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item>
                        <Link to="/">
                            <Typography variant="h6" sx={{ flexGrow: 1, padding: '0.3vw', backgroundColor: '#36454F', color: '#7A9FCE', border: '2mm ridge', borderRadius: '25% 10%' }}>
                                MetaPolis
                            </Typography>
                        </Link>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                    <Grid item>
                        {renderLoginButton()}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;