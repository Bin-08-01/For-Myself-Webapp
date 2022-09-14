import './login.css';

const Login = ()=>{
    return(
        <section className={'login-container container-log'}>
            <div className="login-title title-log">
                Sign up
            </div>
            <form>
                <label htmlFor="">Username</label>
                <input type="text" placeholder={'Type your username'}/>
                <span className={"navbar-error navbar-error-username"}></span>
                <label htmlFor="">Password</label>
                <input type="password" placeholder={'Type your password'}/>
                <span className={"navbar-error navbar-error-password"}></span>
                <button type={"submit"}>Log in</button>
            </form>
        </section>
    )
}

export default Login;