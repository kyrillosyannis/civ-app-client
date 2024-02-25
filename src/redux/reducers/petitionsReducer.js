import { createSlice } from '@reduxjs/toolkit';

export const petitionsSlice = createSlice({
    name: 'petitions',
    initialState: {
        petitionId: 0,
        petitions: [],
    },
    reducers: {
        setSelectedPetitionId: (state, action) => {
            state.petitionId = action.payload;
        },
        getPetitionsSuccess: (state, action) => {
            state.petitions = action.payload;
        },
        savePetitionSuccess: (state, action) => {
            state.petitions = [action.payload, ...state.petitions];
        },
    }
});

export const { setSelectedPetitionId, getPetitionsSuccess, savePetitionSuccess } = petitionsSlice.actions;

export default petitionsSlice.reducer;
