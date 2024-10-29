import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        lang : "en",
    },
    reducers : {
        changeLang : (state,actions) =>{
              state.lang = actions.payload;
        }
    }
})
export const { changeLang} = configSlice.actions;
export default configSlice.reducer;