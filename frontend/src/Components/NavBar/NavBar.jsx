import './navbar.css';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={'navbar-container'}>
            <div className={'navbar-home-container'}>
                <Link to={'/'} className={'navbar-home'}>Home</Link>
            </div>
            <div className="navbar-login-container">
                <Link to={'/login'} className={'navbar-login'}>Login</Link>
                <Link to={'/register'} className={'navbar-register'}>Register</Link>
            </div>
        </nav>
    )
};

export default NavBar ;
