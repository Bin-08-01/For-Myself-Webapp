import './register.css';

const RegisterPage = () => {
    return (
        <section className={'register-container container-log'}>
            <div className="register-title title-log">
                Sign up
            </div>
            <form>
                <label htmlFor="">Email</label>
                <input type="text" placeholder={'Type your email'}/>
                <span className={"navbar-error navbar-error-classname"}></span>
                <label htmlFor="">Username</label>
                <input type="text" placeholder={'Type your username'}/>
                <span className={"navbar-error navbar-error-username"}></span>
                <label htmlFor="">Password</label>
                <input type="password" placeholder={'Type your password'}/>
                <span className={"navbar-error navbar-error-password"}></span>
                <button type={"submit"}>Create account</button>
            </form>
        </section>
    )
};

export default RegisterPage;
