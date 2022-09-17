import {useEffect} from "react";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

const Home = ()=>{
    const user = useSelector((state)=>state.auth?.login.currentUser);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user){
            navigate("/login");
        }
    });
    return(
        <div>
            Hello
            <Link to={'/vocabulary'}>Vocabulary</Link>
        </div>
    )
}

export default Home;