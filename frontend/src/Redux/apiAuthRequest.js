import axios from "axios";
import {
    loginFailed,
    loginStart,
    loginSuccess, logoutFailed,
    logoutStart, logoutSuccess,
    registerFailed,
    registerStart,
    registerSuccess
} from "./authSlice";
import {
    deleteUsersFailed,
    deleteUsersStart,
    deleteUsersSuccess,
    getUsersFailed,
    getUsersStart,
    getUsersSuccess
} from "./userSlice";

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post("/v1/auth/register", user);
        dispatch(registerSuccess());
        navigate("/login");
    } catch (err) {
        dispatch(registerFailed());
    }
};

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        let res = await axios.post("/v1/auth/login", user);
        dispatch(loginSuccess(res.data));
        navigate("/");
    } catch (err) {
        dispatch(loginFailed("Login failed"));
    }
};

export const logoutUser = async (dispatch, id, navigate, accessToken, axiosJWT) => {
    dispatch(logoutStart());
    try {
        await axiosJWT.post("/v1/auth/logout", id, {
            headers: { token: `Bearer ${accessToken}` },
        });
        dispatch(logoutSuccess());
        navigate("/login");
    } catch (err) {
        dispatch(logoutFailed());
    }
};

export const getAllUsers = async (accessToken, dispatch, axiosJWT) => {
    dispatch(getUsersStart());
    try {
        const res = await axios.get('/v1/user/all');
        dispatch(getUsersSuccess(res.data));
    }catch (err){
        dispatch(getUsersFailed());
    }
};

export const deleteUser = async (dispatch, navigate, id, axiosJWT)=>{
    dispatch(deleteUsersStart());
    try {
        await axios.delete(`/v1/user/delete/${id}`);
        dispatch(deleteUsersSuccess());
        navigate("/");
    }catch (err){
        dispatch(deleteUsersFailed("Delete failed!"));
    }
}
