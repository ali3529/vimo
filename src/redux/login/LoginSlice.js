import {createSlice} from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null,
        token: null,
    },
    reducers: {

        userData: (state, action) => {
            const {user} = action.payload
            state.user = user;
        },
        login: (state, action) => {
            const {token} = action.payload
            state.token = token;
        },
        logout: (state, action) => {
            state.user = null;
            state.token = null
        },
    }
})

export const {login, logout, userData} = loginSlice.actions;

export const selectUserData = (state) => state.user.user;
export const selectUserToken = (state) => state.user.token;

export default loginSlice.reducer;
