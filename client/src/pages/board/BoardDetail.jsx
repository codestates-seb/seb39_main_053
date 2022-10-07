import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import BoardDetailReply from "./BoardDetailReply";
import Navbar from '../../component/commons/NavigationBar';
import styled from 'styled-components';
import Button from '../../component/commons/YellowButton';


function BoardDetail() {
    const [boardDetail, setBoardDetail] = useState({});
    let {qid} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
      axios.get(`http://localhost:5000/board/${qid}`).then((res) => {
        setBoardDetail(res.data);
      });
    },[qid]);

    const handleDelete = (did) => {
      if(window.confirm("게시글을 삭제하시겠습니까?")){
        axios.delete(`http://localhost:5000/board/${did}`)
        .then(() => navigate('/boardList'))
      }
    }

  return (
    <>
    <Navbar/>
    <Container>
      <TitleContainer>
        
        <h3>{boardDetail.board_title}</h3>
        <SmallContainer>
          <div>{boardDetail.board_nickname}</div>
          <div>{boardDetail.createdAt}</div>
          <Link to={`/board/${boardDetail.id}/boardEdit`} state={boardDetail}>
            <Button basicColor="white" style={{padding:"2px"}}>게시글 수정</Button>
          </Link>
          <Button onClick={() => handleDelete(boardDetail.id)} basicColor="white" style={{padding:"2px"}}>게시글 삭제</Button>
        </SmallContainer>
        
      </TitleContainer>
      <BodyContainer>
        <div dangerouslySetInnerHTML={{ __html : boardDetail.board_body }}></div>
      </BodyContainer>
      <CommentContainer>
        <BoardDetailReply qid={qid} />
      </CommentContainer>
    </Container>
    </>
    
  )
}

export default BoardDetail

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding-top: 65px;
`

const TitleContainer = styled.div`
    background-color: #1B6DFF;
    color: white;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    width: 897px;
    height: 133px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const SmallContainer = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding-top: 24px;
`

const BodyContainer = styled.div`
    background-color: #D4E3FF;
    border: solid 2px #1B6DFF;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    width: 897px;
    height: 303px;
`

const CommentContainer = styled.div`
    background-color: #D4E3FF;
    border: solid 2px #1B6DFF;
    border-radius: 7px;
    width: 897px;
    height: 593px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4px;  
`

