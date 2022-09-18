import './login.css';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {loginUser} from "../../Redux/apiAuthRequest";
import {resetSide} from "../../Redux/authSlice";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const user = useSelector(state => state.auth.login?.currentUser);
    let msg = useSelector(state=>state.auth?.login.msg);
    useEffect(()=>{
        msg = "";
    }, [msg===""]);
    const handleLogin = (e)=>{
        e.preventDefault();
        const user = {
            username: username,
            password: password
        };
        loginUser(user, dispatch, navigate);
    }

    return (
        <section className={'login-container'}>
            <div className="login-title">
                Log in
            </div>
            <form onSubmit={handleLogin} className={"form-login"}>
                <label htmlFor="">Username</label>
                <input type="text" name={"username"} placeholder={'Type your username'} onChange={e => setUsername(e.target.value)}/>
                <span className={"navbar-error navbar-error-username"}></span>
                <label htmlFor="">Password</label>
                <input type="password" placeholder={'Type your password'} onChange={e => setPassword(e.target.value)}/>
                <span className={"text-login-error"}>{msg}</span>
                <button type={"submit"} className={"button-login"}>Log in</button>
            </form>
        </section>
    )
}

export default Login;