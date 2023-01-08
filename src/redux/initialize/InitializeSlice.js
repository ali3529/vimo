import {createSlice} from "@reduxjs/toolkit";

export const InitializeSlice = createSlice({
    name: 'initialize',
    initialState: {
        initialData: null,
        checkSum: null
    },
    reducers: {
        checkSum: (state, action) => {
            const {checkSum} = action.payload
            state.checkSum = checkSum
        },
        initialData: (state, action) => {
            const {initialData} = action.payload
            state.initialData = initialData
        }
    }
})
export const {checkSum, initialData} = InitializeSlice.actions;
export const selectCheckSum = (state) => state.initialize.checkSum;
export const selectInitialData = (state) => state.initialize.initialData;
export default InitializeSlice.reducer;