import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: '',
    },
    reducers: {
        authenticateSuccess: (state, action) => {
            console.log('in reducer');
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { authenticateSuccess } = userSlice.actions;

export default userSlice.reducer;
