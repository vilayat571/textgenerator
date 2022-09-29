import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
export const getText = createAsyncThunk('/getText/', async (data) => {
    if(data===undefined){
        data=1;
    };
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${data.count}&format=${data.status}`;
    const res = await axios.get(url);
    return res.data;
})
export const textSlice = createSlice({
    name: "textReducer",
    initialState: {
        items: "",
        loading: false,
        error: null
    },
    extraReducers: {
        [getText.pending]: (state, action) => {
            state.loading = false;
        },
        [getText.fulfilled]: (state, action) => {
            state.loading = false;
            state.items = action.payload
        },
        [getText.rejected]: (state, action) => {
            state.error = action.error.message;
        }
    }
});
export default textSlice.reducer;