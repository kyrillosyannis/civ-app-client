import { Box, Grid, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { savePetition } from "../../redux/actions/petitionsActions";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import { useDispatch } from 'react-redux';

const CreatePetitionModal = ({ open, close }) => {
    const [inputPetition, setInputPetition] = useState('');
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    const onPetitionSubmit = () => {
        const requestObj = {
            title,
            description: inputPetition,
        };
        dispatch(savePetition(requestObj));
        close();
        setTitle('');
        setInputPetition('');
    };

    const renderInput = () => {
        return (
            // <Grid container>
            //     <p>Enter title</p>
            //     <input value={title} onChange={e => setTitle(e.target.value)}></input>
            //     <p>Enter Description</p>
            //     <Grid item xs>
            //         <textarea value={inputPetition} onChange={e => setInputPetition(e.target.value)} name="Text1" cols={40} rows={5}></textarea>
            //     </Grid>
            //     <Grid item xs>
            //         <button onClick={onPetitionSubmit}>Submit</button>
            //     </Grid>
            //      </Grid>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    }}>
                        <p>Enter title</p>
                        <input value={title} onChange={e => setTitle(e.target.value)}></input>
                        <p>Enter Description</p>
                        <textarea value={inputPetition} onChange={e => setInputPetition(e.target.value)} name="Text1" style={{ width: '100%', height: '15vh' }}></textarea>
                        <button onClick={onPetitionSubmit}>Submit</button>
                </Box>
           );
    };

    return (
        <Modal open={open}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '40vw',
                    height: '60vh',
                    bgcolor: '#282c34',
                    border: '2px solid #000',
                    boxShadow: 24,
                    maxHeight: '80vh', // Limit modal height to 80% of viewport height
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box sx={{ flexShrink: 0, p: 2 }} display="flex" alignItems="center">
                    <Grid container>
                        <Grid item xs={true}>
                            <Typography id="modal-modal-title" variant="h6">Discussion</Typography>
                        </Grid>
                        <Grid item>
                            <DisabledByDefaultIcon onClick={close} />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexShrink: 0, p: 2 }}>
                    {renderInput()}
                </Box>

            </Box>
        </Modal>
    );
};

export default CreatePetitionModal;
