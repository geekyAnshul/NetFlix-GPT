import { configureStore } from "@reduxjs/toolkit";
import  useReducer from "./userSlice";
import gptReducer from "./gptSlice"
import moviesReducer from "./movieSlice"
import configReducer from "./configSlice"

const appStore = configureStore(
    {
        reducer:{
            user : useReducer,
            movies: moviesReducer,
            gpt : gptReducer,
            config:configReducer,
        },
    }
)

export default appStore;