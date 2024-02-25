import { fetchAll, fetchCommentsByPetitionId, save, saveComment } from "../../api/petitionsApi";
import { getCommentsSuccess, saveCommentSuccess } from "../reducers/commentsReducer";
import { getPetitionsSuccess, savePetitionSuccess } from "../reducers/petitionsReducer";

export const getCommentsByPetitionId = petitionId => {
    return async dispatch => {
        try {
            const comments = await fetchCommentsByPetitionId(petitionId);
            dispatch(getCommentsSuccess(comments));
        } catch(error) {
            //dispatch apiCallFailure
            throw error;
        }
    };
};

export const savePetitionComment = comment => {
    return async dispatch => {
        try {
            const response = await saveComment(comment);
            dispatch(saveCommentSuccess(response));
        } catch (error) {
            //dispatch apiCallFailure
            throw error;
        }
    };
};

export const getPetitions = () => {
    return async dispatch => {
        try {
            const petitionsPage = await fetchAll();
            if (petitionsPage != undefined) {
              dispatch(getPetitionsSuccess(petitionsPage.content));  
            }
        } catch (error) {
            //dispatch apiCallFailure
            throw error;
        }
    };
};

export const savePetition = petition => {
    return async dispatch => {
        try {
            const savedPetition = await save(petition);
            dispatch(savePetitionSuccess(savedPetition));
        } catch (error) {
            //dispatch apiCallFailure
            throw error;
        }
    };
};
