import { createSlice } from "@reduxjs/toolkit";
import { books as mockBooks } from "./mockData";
// here we take mockData as initial state so that on inital render we show mockdata books ,also make easy adding the in current list
const initialState = [...mockBooks];

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;