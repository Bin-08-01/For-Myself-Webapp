import './App.css';
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Login from "./Components/Login/Login";
import RegisterPage from "./Components/Register/Register";
import VocabularyPage from "./Components/Vocabulary/vocabularyPage";
import ShowAllVocabulary from "./Components/ShowAllVocabulary/showAllVocabulary";
import AddVocabulary from "./Components/AddVocabulary/AddVocabulary";
import ProfileUser from "./Components/ProfileUser/ProfileUser";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<RegisterPage />} />
          <Route path={'/vocabulary'} element={<VocabularyPage />} />
          <Route path={'/view'} element={<ShowAllVocabulary />} />
          <Route path={'/add'} element={<AddVocabulary />} />
          <Route path={'/edit'} element={<AddVocabulary />} />
          <Route path={'/profile'} element={<ProfileUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
