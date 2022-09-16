import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";



const Home = ()=>{
    const user = useSelector((state)=>state.auth?.login.currentUser);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user){
            navigate("/login");
        }
    }, []);
    return(
        <div>
            Hello
        </div>
    )
}

export default Home;