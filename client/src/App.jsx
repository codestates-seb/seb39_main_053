import IntroPage from "../src/component/pages/IntroPage"
import BoardList from "./component/pages/board/BoardList";
import Navbar from "./component/commons/NavigationBar";
import "./App.css";
import AppRouter from "./Router";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchBar from "./component/commons/SearchBar";
import Input from "./component/commons/Input";
import FilterWriteBar from "./component/commons/FilterWrite";
import Article from "./component/commons/Article";
import React from 'react'





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
  <>

    {/* <IntroPage/> */}
    <BoardList/>

      <Routes>
        {/* <Route path="/" element={<QuestionList />} /> */}
        {/* <Route path="/questionList" element={<QuestionList />} />
        <Route path="/questionDetail" element={<QuestionDetail />} />
        <Route path="/questionWrite" element={<QuestionWrite />} />

        <Route path="/boardList" element={<BoardList />} />
        <Route path="/boardDetail" element={<BoardDetail />} />
        <Route path="/boardWrite" element={<BoardWrite />} /> */}
      </Routes>

  </>   


  )
 
  
}

export default App;
