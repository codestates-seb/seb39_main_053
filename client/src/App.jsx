import IntroPage from "./pages/IntroPage"
<<<<<<< HEAD:client/src/App.jsx
import BoardList from "./pages/board/BoardList";
import BoardDetail from "./pages/board/BoardDetail";
import BoardWrite from "./pages/board/BoardWrite";
=======
>>>>>>> 0a0593d28ffd01e5d80fdad215652271ff57ca09:client/src/App.js
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from 'react'
import QuestionList from "./pages/question/questionList/QuestionList";
import QuestionDetail from "./pages/question/questionDetail/QuestionDetail";
import QuestionWrite from "./pages/question/questionWrite/QuestionWrite";

function App() {
<<<<<<< HEAD:client/src/App.jsx
  

=======
>>>>>>> 0a0593d28ffd01e5d80fdad215652271ff57ca09:client/src/App.js
  return (
  <>

    {/* <IntroPage/> */}
    

      <Routes>
        
        <Route path="/" element={<QuestionList />} />
        <Route path="/detail" element={<QuestionDetail />} />
        <Route path="/write" element={<QuestionWrite />} />
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
