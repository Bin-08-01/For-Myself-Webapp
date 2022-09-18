import {useEffect} from "react";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import AdminHomePage from "./AdminHomePage";

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
            {user?.user.admin ?  (<AdminHomePage/>) : (<Link to={'/vocabulary'}>Vocabulary</Link>)}
        </div>
    )
}

export default Home;