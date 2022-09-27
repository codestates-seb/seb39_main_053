import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../../commons/NavigationBar';
import styled from "styled-components";
import { ReactComponent as Icon } from "../../../assets/유저아이콘.svg";
import FilterWriteBar from '../../commons/FilterWrite';
import Ad from '../../commons/HoverModal1';
import { BoardMore, boardMore } from '../../commons/text';


  const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

  `

  const Container = styled.div`
      border-bottom: 2px solid #1B6DFF;
      display: flex;
      width: 897px;
      height: 220px; 
      align-items: center;
      /* padding: 25px; */
  `
  const SmallContainer = styled.div`
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: space-between;
      height: 110px;
  `

  const UserAndDate = styled.div`
    text-align: end;
  `

  const IconContainer = styled.div`
    margin-left: 18px;
    margin-right: 53px;
  `

function BoardList() {
    const [boardList, setBoardList] = useState([]);
    
    useEffect(() => {
      axios
      .get("http://localhost:4000/board")
      .then((res) => {
        setBoardList(res.data);
      })
    },[])
  
  
    return (
    <>
      <Navbar/>
      <BoardMore/>
      <Ad text = '안녕'/>
      
      <MainContainer>
        <FilterWriteBar/>
        {boardList.map((e) => {
          const {id, board_title, board_body, board_nickname} = e;
          
          return <div key={id}>
            <Container>
              <IconContainer><Icon /></IconContainer>
              <SmallContainer>
                  <h2>{board_title}</h2>
                  <div>{board_body}</div>
                  <UserAndDate>{board_nickname}</UserAndDate>
              </SmallContainer>  
            </Container>
          </div>

        })}
        </MainContainer>
    </>
  )
}

export default BoardList