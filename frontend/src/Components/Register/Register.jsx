import './register.css';
import {useState} from "react";
import {registerUser} from "../../Redux/apiAuthRequest";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        <section className={'register-container container-log'}>
            <div className="register-title title-log">
                Sign up
            </div>
            <form onSubmit={handleRegister}>
                <label htmlFor="">Email</label>
                <input type="text" name={"email"} placeholder={'Type your email'} onChange={e => setEmail(e.target.value)}/>
                {/*<span className={"navbar-error navbar-error-classname"}></span>*/}
                <label htmlFor="">Username</label>
                <input type="text" placeholder={'Type your username'} onChange={e => setUsername(e.target.value)}/>
                {/*<span className={"navbar-error navbar-error-username"}></span>*/}
                <label htmlFor="">Password</label>
                <input type="password" placeholder={'Type your password'} onChange={e => setPassword(e.target.value)}/>
                <span className={"navbar-error navbar-error-password"}></span>
                <button type="submit"> Create account </button>
            </form>
        </section>
    )
};

export default RegisterPage;
