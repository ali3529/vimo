import {createSlice} from "@reduxjs/toolkit";

export const SearchSlice = createSlice({
    name: 'search',
    initialState: {
        search:null,
        searchKey:null
    },
    reducers: {

        setSearchData: (state, action) => {
            const {search,searchKey} = action.payload
            state.search = search;
            state.searchKey = searchKey;
        }
    }
})

export const {setSearchData} = SearchSlice.actions;

export const selectSearch = (state) => state.search;

export default SearchSlice.reducer;
