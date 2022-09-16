import './App.css';
import Home from "./Components/Home/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";
import RegisterPage from "./Components/Register/Register";

function App() {
  return (
    <Router>
      <NavBar />
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/register'} element={<RegisterPage/>}/>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
