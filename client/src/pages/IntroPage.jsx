import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import Button from "../component/commons/YellowButton";
import { ReactComponent as BigLogo } from "../assets/bigLogo.svg"
import StyledEarth from "../component/commons/StyledEarth";
import "../App.css"
import { useNavigate } from "react-router-dom";
import LogIn from "./auth/Login";
import SignUp from "./auth/Signup";
import loginModalStore from "../store/loginModalStore";
import signupModalStore from "../store/signupModalStore";




const Intro = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate(); 
    
    const { loginModal, setLoginModal } = loginModalStore();
    const { signupModal, setSignupModal } = signupModalStore();

    return (
    
        <Container>
            <LogoContainer/>
            
            <SmallContainer>
                <Button hoverWidth= "160%" fontSize="3.8rem" basicColor="white" onClick={() => { setLoginModal(true) }}><StyledEarth />로그인</Button>
                {loginModal === true ? <LogIn /> : null}
                <Button hoverWidth= "160%" fontSize="3.8rem" basicColor="white" onClick={() => { setSignupModal(true) }}><StyledEarth />회원가입</Button>
                {signupModal === true ? <SignUp /> : null}
                <Button hoverWidth= "160%" fontSize="3.8rem" basicColor="white" onClick={() => {navigate(`/questionList`)}}><StyledEarth />손님</Button>
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
    @media screen and (max-width: 850px) {
        padding-left: 0px;
        padding-bottom: 0px;
    }
`
const SmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* margin-right: 250px; */
    @media screen and (max-width: 650px) {
        display: none; 
    }
`
const LogoContainer = styled(BigLogo)`
    width: 820px;
    @media screen and (max-width: 1200px) {
        width: 600px;    
    }
    @media screen and (max-width: 1000px) {
        width: 450px;    
    }
    @media screen and (max-width: 850px) {
        width: 300px;    
    }
`