import {createSlice} from "@reduxjs/toolkit";

export const SelectedSortSlice = createSlice({
    name: 'sort',
    initialState: {
        sort:null,
        video:null
    },
    reducers: {
        setSortBase: (state, action) => {
            const {sort} = action.payload
            state.sort = sort;
        },
        VideosData:(state,action) => {
            const {video} = action.payload
            state.video = video
        }
    }
})

export const {setSortBase,VideosData} = SelectedSortSlice.actions;

export const selectSort = (state) => state.sort.sort;
export const selectVideos = (state) =>state.sort.video;
export default SelectedSortSlice.reducer;
