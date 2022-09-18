import './navbar.css';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../Redux/apiAuthRequest";
import {createAxios} from "../../createInstance";
import {logoutSuccess} from "../../Redux/authSlice";

const NavBar = () => {
    const raw = useSelector(state => state?.auth.login.currentUser);
    const user = raw?.user;
    const dispatch = useDispatch();
    const axiosJWT = createAxios(raw, dispatch, logoutSuccess);
    const navigate = useNavigate();
    const  handleLogout = async ()=>{
        await logoutUser(dispatch, user?.id, navigate, raw?.accessToken, axiosJWT);
    }

    return (
        <nav className={'navbar-container'}>
            <div className={'navbar-home-container'}>
                <Link to={'/'} className={'navbar-home'}>Home</Link>
            </div>
                {user ? (
                    <div className="navbar-login-success-container">
                        <div className="navbar-search-container">
                            <input type="search" className={"navbar-search-input"}/>
                            <i className="fa-solid fa-magnifying-glass icon-search"></i>
                        </div>
                        <p className={"navbar-user"}>Hi, <span>{user.username}</span></p>
                        <Link to={'/logout'} className={"navbar-logout"} onClick={handleLogout}>Logout</Link>
                    </div>
                ) : (
                    <div className="navbar-login-container">
                        <Link to={'/login'} className={'navbar-login'}>Login</Link>
                        <Link to={'/register'} className={'navbar-register'}>Register</Link>
                    </div>
                )
                }

        </nav>
    )
};

export default NavBar ;
