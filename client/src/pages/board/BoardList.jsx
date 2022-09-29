import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../../component/commons/NavigationBar';
import styled from "styled-components";
import { ReactComponent as Icon } from "../../assets/userIcon.svg";
import FilterWriteBar from '../../component/commons/FilterWrite';
import HoverModal from '../../component/commons/HoverModal';
import { boardMore } from '../../component/commons/modalText';
import SearchBar from '../../component/commons/SearchBar';
import { useNavigate } from 'react-router-dom';




function BoardList() {
    const [boardList, setBoardList] = useState([]);
    const navigate = useNavigate();

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
      <MainContainer>
        <SideContainer>
        <HoverModal text={boardMore}/>
        </SideContainer>
        <SearchContainer>
          <SearchBar/>
        </SearchContainer>
        <FilterWriteBar onClick = {() => {navigate("/boardWrite")}}/>
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
  const MainContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 16px; 
  `

  const Container = styled.div`
      border-bottom: 2px solid #1B6DFF;
      display: flex;
      height: 220px; 
      align-items: center;
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

  const SideContainer = styled.div`
  `

  const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  `

export default BoardList