import IntroPage from "../src/component/pages/IntroPage"
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
import QuestionList from "./component/pages/questionList/QuestionList";
import QuestionDetail from "./component/pages/questionDetail/QuestionDetail";





function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Routes>
        
        <Route path="/" element={<QuestionDetail />} />
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
