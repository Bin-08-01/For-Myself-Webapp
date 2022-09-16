import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false,
        },
        register: {
            isFetching: false,
            error: false,
            success: false,
        },
        msg: "",
    },

    reducers: {
        registerStart: (state) => {
            state.register.isFetching = true;
        },
        registerSuccess: state => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = true;
        },
        registerFailed: state => {
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;
        },

        loginStart: state => {
            state.login.isFetching = true;
            state.login.currentUser = null;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed: (state, action) => {
            state.login.isFetching = false;
            state.login.error = true;
            state.login.currentUser = null;
            state.msg = action.payload;
        },
        logoutStart: (state)=>{
            state.login.isFetching = true;
        },
        logoutSuccess: state=>{
            state.login.isFetching = false;
            state.login.currentUser =  null;
            state.login.error = false;
        },
        logoutFailed: state => {
            state.login.isFetching = false;
            state.login.error = true;
        }
    }
});

export const {
    registerStart,
    registerSuccess,
    registerFailed,
    loginStart,
    loginSuccess,
    loginFailed,
    logoutStart,
    logoutSuccess,
    logoutFailed
} = authSlice.actions;

export default authSlice.reducer;