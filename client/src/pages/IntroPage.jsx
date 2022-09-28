import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import Button from "../component/commons/YellowButton";
import { ReactComponent as BigLogo } from "../assets/bigLogo.svg"
import StyledEarth from "../component/commons/StyledEarth";
import "../App.css"

const Intro = () => {
    const [visible, setVisible] = useState(false);
    

    return (
    
        <Container>
            <BigLogo style={{width:820}}/>
            
            <SmallContainer>
                <Button hoverWidth= "160%" fontSize="3.8rem"><StyledEarth />로그인</Button>
                <Button hoverWidth= "160%" fontSize="3.8rem"><StyledEarth />회원가입</Button>
                <Button hoverWidth= "160%" fontSize="3.8rem"><StyledEarth />손님</Button>
            </SmallContainer>
        </Container>
    )
}

export default Intro;

const Container = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    background-color: #1B6DFF;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-left: 50px;
    padding-bottom: 50px;
`

const SmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 250px;
`