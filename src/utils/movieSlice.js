import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies:null,
        trailerVideo:null,
    },
    reducers : {
        addMovie : (state, action) => {
            state.nowPlayingMovies = action.payload ;
        },
        addPopular : (state, action) => {
            state.popularMovies = action.payload ;
        },
        addRated : (state, action) => {
            state.TopRated = action.payload ;
        },

        addUpcomming : (state, action) => {
            state.UpComming = action.payload ;
        },

        addTrailer : (state, action) => {
            state.trailerVideo = action.payload ;
        },

        
    }
})

export const { addMovie,addTrailer,addPopular,addRated,addUpcomming } = movieSlice.actions ;
export default movieSlice.reducer;