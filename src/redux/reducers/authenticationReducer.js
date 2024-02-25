import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: '',
    },
    reducers: {
        authenticateSuccess: (state, action) => {
            state.value = action.payload;
        },
        logoutSuccess: (state, action) => {
            state.value = '';
        },
    },
});

// Action creators are generated for each case reducer function
export const { authenticateSuccess, logoutSuccess } = userSlice.actions;

export default userSlice.reducer;
