import {useDispatch, useSelector} from "react-redux";
import {createAxios} from "../../createInstance";
import {useNavigate} from "react-router-dom";
import {loginSuccess} from "../../Redux/authSlice";
import {deleteUser, getAllUsers} from "../../Redux/apiAuthRequest";
import {useEffect} from "react";

const AdminHomePage = () => {
    const user = useSelector((state)=>state.auth.login?.currentUser.user);
    const userList = useSelector((state)=>state.users.users?.allUsers);
    const msg = useSelector((state)=>state.users?.msg);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let axiosJWT = createAxios(user, dispatch, loginSuccess);

    useEffect(()=>{
        getAllUsers(user?.accessToken,dispatch,navigate, axiosJWT);
    },[]);

    const handleDelete =(id)=>{
        navigate('/deleteuser');
        deleteUser(dispatch, navigate, id, axiosJWT);
    };

    return (
        <main className="home-container">
            <div className="home-title">User List</div>
            <div className="home-role">
                {`Your role: ${user?.admin ? `Admin` : `User`}`}
            </div>
            <div className="home-userlist">
                {userList?.map((severalUser) => {
                    return (
                        <div className="user-container" key={severalUser._id}>
                            <div className="home-user"><h3>{severalUser.username}</h3><p>{severalUser.email}</p></div>
                            <div className="delete-user" onClick={()=>handleDelete(severalUser._id)}> Delete </div>
                        </div>
                    );
                })}
            </div>
            <div className="errorMsg">{msg}</div>
        </main>
    );
};

export default AdminHomePage;
