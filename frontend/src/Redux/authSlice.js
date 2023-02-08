import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            error: false,
            msg: "",
        },
        register: {
            isFetching: false,
            error: false,
            success: false,
            msg: "",
        },
        msg: "",
    },

    reducers: {
        resetSide: state => {
            state.login.msg = "";
            state.register.msg = "";
        },
        registerStart: (state) => {
            state.register.isFetching = true;
            state.register.msg = "";
        },
        registerSuccess: state => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = true;
            state.register.msg = "";

        },
        registerFailed: state => {
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;
            state.register.msg = "Register Failed";
        },

        loginStart: state => {
            state.login.isFetching = true;
            state.login.currentUser = null;
            state.login.msg = "";
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
            state.login.msg = "";
        },
        loginFailed: (state, action) => {
            state.login.isFetching = false;
            state.login.error = true;
            state.login.currentUser = null;
            state.login.msg = action.payload;
        },
        logoutStart: (state) => {
            state.login.isFetching = true;
        },
        logoutSuccess: state => {
            state.login.isFetching = false;
            state.login.currentUser = null;
            state.login.error = false;
        },
        logoutFailed: state => {
            state.login.isFetching = false;
            state.login.error = true;
        }
    }
});

export const {
    resetSide,
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