import {createSlice} from "@reduxjs/toolkit";

export const SelectedTicketSlice = createSlice({
    name: 'category',
    initialState: {
        category:null
    },
    reducers: {

        setCategory: (state, action) => {
            const {category} = action.payload
            state.category = category;
        }
    }
})

export const {setCategory} = SelectedTicketSlice.actions;

export const selectCategory = (state) => state.category.category;

export default SelectedTicketSlice.reducer;
