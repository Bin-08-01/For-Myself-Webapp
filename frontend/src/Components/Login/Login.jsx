import './login.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {loginUser} from "../../Redux/apiRequest";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const user = useSelector(state => state.auth.login?.currentUser);
    const msg = useSelector(state=>state.auth?.msg);

    const handleLogin = (e)=>{
        e.preventDefault();
        const user = {
            username: username,
            password: password
        };
        loginUser(user, dispatch, navigate);
    }

    return (
        <section className={'login-container container-log'}>
            <div className="login-title title-log">
                Log in
            </div>
            <form onSubmit={handleLogin}>
                <label htmlFor="">Username</label>
                <input type="text" placeholder={'Type your username'} onChange={e => setUsername(e.target.value)}/>
                <span className={"navbar-error navbar-error-username"}></span>
                <label htmlFor="">Password</label>
                <input type="password" placeholder={'Type your password'} onChange={e => setPassword(e.target.value)}/>
                <span className={"navbar-error navbar-error-password"}>{msg}</span>
                <button type={"submit"}>Log in</button>
            </form>
        </section>
    )
}

export default Login;