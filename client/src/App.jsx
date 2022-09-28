import IntroPage from "./pages/IntroPage"
import BoardList from "./pages/board/BoardList";
import BoardDetail from "./pages/board/BoardDetail";
import BoardWrite from "./pages/board/BoardWrite";
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react'





function App() {
  

  return (
  <>

    {/* <IntroPage/> */}
    

      <Routes>
        {/* <Route path="/" element={<QuestionList />} /> */}
        {/* <Route path="/questionList" element={<QuestionList />} />
        <Route path="/questionDetail" element={<QuestionDetail />} />
        <Route path="/questionWrite" element={<QuestionWrite />} /> */}

        <Route path="/boardList" element={<BoardList />} />
        <Route path="/boardDetail" element={<BoardDetail />} />
        <Route path="/boardWrite" element={<BoardWrite />} /> 
      </Routes>

  </>   


  )
 
  
}

export default App;
