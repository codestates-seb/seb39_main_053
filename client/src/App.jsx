import IntroPage from "./pages/IntroPage"
import BoardList from "./pages/board/BoardList";
import BoardDetail from "./pages/board/BoardDetail";
import BoardWrite from "./pages/board/BoardWrite";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import QuestionList from "./pages/question/questionList/QuestionList";
import QuestionDetail from "./pages/question/questionDetail/QuestionDetail";
import QuestionWrite from "./pages/question/questionWrite/QuestionWrite";
import SignUp from "./pages/auth/Signup";
import LogIn from "./pages/auth/Login";



function App() {

  return (
  <>
      <SignUp/>
      <LogIn/>
      {/* <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/questionList" element={<QuestionList />} />
        <Route path="/questionDetail" element={<QuestionDetail />} />
        <Route path="/questionWrite" element={<QuestionWrite />} />

        <Route path="/boardList" element={<BoardList />} />
        <Route path="/boardDetail/:qid" element={<BoardDetail />} />
        <Route path="/boardWrite" element={<BoardWrite />} /> 
      </Routes> */}
  </>   
  )
}

export default App;
