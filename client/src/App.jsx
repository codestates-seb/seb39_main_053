import IntroPage from "./pages/IntroPage"
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import QuestionList from "./pages/question/questionList/QuestionList";
import QuestionDetail from "./pages/question/questionDetail/QuestionDetail";
import QuestionWrite from "./pages/question/questionWrite/QuestionWrite";

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<QuestionList />} />
        <Route path="/detail" element={<QuestionDetail />} />
        <Route path="/write" element={<QuestionWrite />} />
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