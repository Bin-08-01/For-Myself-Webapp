import './register.css';
import {useEffect, useState} from "react";
import {registerUser} from "../../Redux/apiAuthRequest";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {resetSide} from "../../Redux/authSlice";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const msg = useSelector(state=>state.auth?.register.msg);
    useEffect(()=>{
        dispatch(resetSide());
    }, msg==="");
    const handleRegister = (e)=>{
        e.preventDefault();
        const newUser = {
            username: username,
            password: password,
            email: email,
        };
        registerUser(newUser, dispatch, navigate);
    }

    return (
        <section className={'register-container'}>
            <div className="register-title">
                Sign up
            </div>
            <form onSubmit={handleRegister} className={"form-register"}>
                <label htmlFor="">Email</label>
                <input type="text" name={"email"} placeholder={'Type your email'} onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="">Username</label>
                <input type="text" placeholder={'Type your username'} onChange={e => setUsername(e.target.value)}/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder={'Type your password'} onChange={e => setPassword(e.target.value)}/>
                <span className={"text-register-error"}>{msg}</span>
                <button type="submit" className={"button-register"}> Create account </button>
            </form>
        </section>
    )
};

export default RegisterPage;
