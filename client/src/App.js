import IntroPage from "../src/component/pages/IntroPage"
import BoardList from "./component/pages/board/BoardList";
import Navbar from "./component/commons/NavigationBar";
import "./App.css";
import AppRouter from "./Router";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";






function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    {/* <IntroPage/> */}
    <BoardList/>
    </>   
  )
}

export default App;
