import {useDispatch, useSelector} from "react-redux";
import {createAxios} from "../../createInstance";
import {useNavigate} from "react-router-dom";
import {loginSuccess} from "../../Redux/authSlice";
import {deleteUser, getAllUsers} from "../../Redux/apiAuthRequest";
import {useEffect} from "react";
import './adminhome.css';

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
        const resl = window.confirm("Are you sure ?");
        if(resl){
            navigate('/deleteuser');
            deleteUser(dispatch, navigate, id, axiosJWT);
        }
    };

    return (
        <main className="home-container">
            <div className="home-title">User List</div>
            <div className="home-role">
                {`Your role: ${user?.admin ? `Admin` : `User`}`}
            </div>
            <div className="home-userlist">
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {userList?.map((severalUser) => {
                        return (
                            <tr>
                                <td>
                                    <div className="home-username"><h3>{severalUser.username}</h3></div>
                                </td>
                                <td>
                                    <div className="home-email"><p>{severalUser.email}</p></div>
                                </td>
                                <td>
                                    {severalUser.admin ? (
                                        <div className={"home-role-user"}>Admin</div>
                                    ):(
                                        <div className={"home-role-user"}>User</div>
                                    )}
                                </td>
                                <td>
                                    <div className="delete-user" onClick={()=>handleDelete(severalUser._id)}> Delete </div>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>

            </div>
            <div className="errorMsg">{msg}</div>
        </main>
    );
};

export default AdminHomePage;
