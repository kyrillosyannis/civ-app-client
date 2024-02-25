import { Box, Grid, Modal, Typography } from "@mui/material";
import styles from './style';
import { useEffect, useState } from "react";
import { getCommentsByPetitionId, savePetitionComment } from "../../redux/actions/petitionsActions";
import { useDispatch, useSelector } from "react-redux";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

// const useStyles = makeStyles((theme) => ({
//     container: {
//         overflowY: 'scroll',
//         // Customize scrollbar here
//         '&::-webkit-scrollbar': {
//             width: '12px',
//         },
//         '&::-webkit-scrollbar-track': {
//             background: '#f1f1f1',
//         },
//         '&::-webkit-scrollbar-thumb': {
//             background: '#888',
//             borderRadius: '10px',
//         },
//         '&::-webkit-scrollbar-thumb:hover': {
//             background: '#555',
//         },
//     },
// }));

// function ScrollableContainer() {
//     const classes = useStyles;

//     return (
//         <div className={classes.container}>
//             {/* Your content goes here */}
//         </div>
//     );
// }

const PetitionCommentModal = ({open, close}) => {

    const dispatch = useDispatch();
    const comments = useSelector(state => state?.comments?.comments?.content);
    const petitionId = useSelector(state => state?.petitions?.petitionId);
    const [inputComment, setInputComment] = useState('');

    useEffect(() => {
        dispatch(getCommentsByPetitionId(petitionId));
    }, [petitionId]);

    const renderComments = () => {
        if (comments != undefined) {
            return comments.map(comment => <Typography sx={{ border: '1px solid #ccc', padding: '10px', color: 'white' }} key={comment.id} variant="body1">{comment.content}</Typography>);
            // return comments.map(comment => <p key={comment.id}>{comment.content}</p>);
        }
    };

    const onCommentSubmit = () => {
        dispatch(savePetitionComment({
            content: inputComment,
            petitionId: petitionId
        }));
        setInputComment('');
    };

    const renderInput = () => {
        return(
        <Grid container>
            <Grid item xs>
                    <textarea value={inputComment} onChange={e => setInputComment(e.target.value)} name="Text1" style={{ width: '100%', height: '15vh' }} ></textarea>
                {/* <input value={inputComment} onChange={e => setInputComment(e.target.value)}></input> */}
            </Grid>
            <Grid container>
                <Grid item>
                    <button onClick={onCommentSubmit}>Submit</button>
                </Grid>
            </Grid>
        </Grid>);
    };

    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '40vw',
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
                {/* Scrollable content */}
                <Box sx={{ overflowY: 'scroll', flexGrow: 1 }}>
                    <Box sx={{ p: 2 }}>
                        <div id="modal-modal-description">
                            {renderComments()}

                        </div>
                    </Box>
                </Box>
                {/* Fixed element outside of scrollbar */}
                <Box sx={{ flexShrink: 0, p: 2. }}>
                    {renderInput()}
                </Box>
            </Box>
        </Modal>
        
    );
};

export default PetitionCommentModal;
