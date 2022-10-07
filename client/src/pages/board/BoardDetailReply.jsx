import React, { useEffect, useState } from 'react'
import axios from 'axios';
import LogoIconSrc from '../../assets/smallLogo.svg';
import AskIconSrc from "../../assets/askIcon.png"
import styled from 'styled-components';
import Button from "../../component/commons/YellowButton";

function BoardDetailReply({qid}) {
    const [replyList, setReplyList] = useState([]);
    const [replyContent, setReplyContent] = useState("")
    // const [replyName, setReplyName] = useState("")
    
    useEffect(() => {
        axios.get(`http://localhost:5000/board/${qid}/reply`).then((res) => {
            setReplyList(res.data);
          });
    },[qid])


      const handleContentChange = (e) => {
        setReplyContent(e.target.value)
        // setReplyName(e.target.value)
      }

      console.log(replyContent)

      const handleReplySubmit = () => {
        const data = {
            content: replyContent,
            writer: "nickname",
            created_at: new Date()
        }

        axios.post(`http://localhost:5000/board/${qid}/reply`, data)
        .then((res) => setReplyList((prev) => ([...prev, res.data]))
        );
      }

  return (
    <>
     <AskContainer>
          <Icon src={AskIconSrc} /> 총 {replyList.length}개의 답변이 달렸습니다
     </AskContainer>
    <CommentBobyContainer>
        <CommentTitleContainer>
        <Icon src={LogoIconSrc}/>
        <div style={{paddingTop: "26px"}}>
            <span>닉네임님, 답변해주세요!</span><br />
            <span>모두에게 도움이 되는 답변의 주인공이 되어주세요!</span>
            
        </div>
        </CommentTitleContainer>
    <ul>{replyList.map(({id, content, writer, created_at}) => (
        <li key={id}>
          <div>{content}</div>
          <div>{writer}</div>
          <div>{created_at}</div>
        </li>
      ))}</ul>
      <textarea value={replyContent} onChange={handleContentChange} />
      <Button type="submit" onClick={handleReplySubmit} basicColor="black" style={{padding:"2px"}}>등록</Button>
      
      </CommentBobyContainer>
      </>
  )
}

export default BoardDetailReply

const AskContainer = styled.div`
    justify-content: flex-start;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    padding-left: 20px;
    width: 798px;
`

const Icon = styled.img`
`

const CommentTitleContainer = styled.div`
    display: flex;
    margin-top: 20px;
    margin-left: 18px;
`

const CommentBobyContainer = styled.form`
    position: relative;
    background-color: white;
    border: none;
    border-radius: 7px;
    width: 798px;
    height: 464px;
    display: flex;
    /* justify-content: flex-start; */
    align-items: flex-start;
    flex-direction: column;
    /* margin-top: 76px; */
    /* padding: 20px; */
`