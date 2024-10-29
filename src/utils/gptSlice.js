import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'gpt',
    initialState : {
        showGpt : false,
        movieNames:null,
        movieResults:null
    },
    reducers : {
        toggleGpt : (state) => {
            state.showGpt = !state.showGpt;
        },
        addGptMovieResult : (state,action) => {
            const {movieNames,movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults= movieResults;

        }
    },
});
export const { toggleGpt,addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;