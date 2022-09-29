import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BoardDetail() {
    const [boardDetail, setBoardDetail] = useState({});
    let {qid} = useParams();
    const [replyList, setReplyList] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:4000/board/${qid}`).then((res) => {
        setBoardDetail(res.data);
      });
    },[qid]);
  return (
    <>
    <div>{boardDetail.board_title}</div>
    <div>{boardDetail.board_body}</div>
    <div>{boardDetail.board_nickname}</div>
    </>
  )
}

export default BoardDetail