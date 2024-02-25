import { createSlice } from '@reduxjs/toolkit';

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
    },
    reducers: {
        getCommentsSuccess: (state, action) => {
            state.comments = action.payload;
        },

        saveCommentSuccess: (state, action) => {
            state.comments.content = [...state.comments.content, action.payload];
        },
    }
});

export const { getCommentsSuccess, saveCommentSuccess } = commentsSlice.actions;

export default commentsSlice.reducer;
