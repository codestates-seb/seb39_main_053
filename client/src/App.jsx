import IntroPage from "./pages/IntroPage"
import BoardList from "./pages/board/BoardList";
import BoardDetail from "./pages/board/BoardDetail";
import BoardWrite from "./pages/board/BoardWrite";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from 'react'
import QuestionList from "./pages/question/questionList/QuestionList";
import QuestionDetail from "./pages/question/questionDetail/QuestionDetail";
import QuestionWrite from "./pages/question/questionWrite/QuestionWrite";
import SignUp from "./pages/auth/Signup";
import LogIn from "./pages/auth/Login";
import QuestionModify from "./pages/question/questionDetail/QuestionModify";

function App() {

  return (
  <>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/questionList" element={<QuestionList />} />
        <Route path="/questionDetail/:qid" element={<QuestionDetail />} />
        <Route path="/questionWrite" element={<QuestionWrite />} />
        <Route path="/questionModify/:qid" element={<QuestionModify />} />

        {/* <Route path="/boardList" element={<BoardList />} />
        <Route path="/boardDetail/:qid" element={<BoardDetail />} />
        <Route path="/boardWrite" element={<BoardWrite />} />  */}
      </Routes>
  </>   
  )
}

export default App;
