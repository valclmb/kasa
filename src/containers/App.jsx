import './App.css'

import React, {useEffect} from "react";
import { Outlet, useLocation, useNavigate} from "react-router-dom";
import {Header} from "../components/Header/Header.jsx";
import {Footer} from "../components/Footer/Footer.jsx";

function App() {
    const location = useLocation().pathname;
    const navigate = useNavigate();
    useEffect(() => {
        if(location === "/") {navigate("/home")}
    },[location,navigate])

  return (
    <div className="App">
        <div className="App__container">
            <Header/>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
export default App
