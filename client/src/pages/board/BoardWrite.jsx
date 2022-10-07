import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../component/commons/NavigationBar';
import { useNavigate } from 'react-router-dom';
import Editor from '../../component/commons/Editor';



function BoardWrite() {
    const navigate = useNavigate();
    const [boardWrite, setBoardWrite] = useState({
      board_title: "",
      board_body: "",
      board_nickname: "nickname"
    });
    let {board_title} = boardWrite;

    const handleTitleChange = (event) => {
      setBoardWrite({...boardWrite, board_title: event.target.value})
    }

    const handleBodyChange = (event) => {
      setBoardWrite({...boardWrite, board_body: event, })
    } 

    const handleWriteSubmit = () => {
      axios
      .post('http://localhost:5000/board', boardWrite)
      .then((res) => {
        navigate(`/boardDetail/${res.data.id}`);
      })
    }

  return (
    <>
    <Navbar/>
    <div>BoardWrite</div>
    {/* <ReactQuill theme="snow" value={boardWrite} onChange={setBoardWrite} /> */}
    {/* <Editor></Editor> */}
    <input type='text' placeholder='제목을 적어주세요!' value={board_title} onChange={handleTitleChange}></input>
    <Editor value={boardWrite.board_body} onChange={handleBodyChange}></Editor>
    <button onClick={handleWriteSubmit}>등록</button>
    <button onClick={() => {navigate('/boardList')}}>취소</button>
    </>
  )
}

export default BoardWrite

