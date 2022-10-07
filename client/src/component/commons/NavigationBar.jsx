import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Navlogo } from "../../assets/navLogo.svg"
import LogIn from "../../pages/auth/Login";
import SignUp from "../../pages/auth/Signup";
import loginModalStore from "../../store/loginModalStore";
import signupModalStore from "../../store/signupModalStore";
import Button from "./YellowButton";

const Navbar = () => {
    const navigate = useNavigate();
    const { loginModal, setLoginModal } = loginModalStore();
    const { signupModal, setSignupModal } = signupModalStore();

    return (
        <>
            <Container>
                <LogoContainer style={{height:80}} onClick={() => {navigate(`/`)}}/>
                <div>
                    <Button basicColor="white" fontSize="1.1rem" onClick={() => {navigate(`/questionList`)}}>질문&답변</Button>
                    <Button basicColor="white" fontSize="1.1rem" >정보 공유</Button>
                    <Button basicColor="white" fontSize="1.1rem" >친구 찾기</Button>
                </div>
                <LoginContainer>
                    <Button basicColor="white" fontSize="0.9rem" onClick={() => { setLoginModal(true) }}>로그인</Button>
                    {loginModal === true ? <LogIn /> : null}
                    {signupModal === true ? <SignUp /> : null}
                </LoginContainer>
            </Container>
        </>
    )
}

export default Navbar;

const Container = styled.nav`
    top: 0;
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1B6DFF;
    margin: 0;
    padding: 0;
    height: 74px;
    z-index: 1;
    /* &:hover {
        cursor: pointer;
        color: #FFDE32;
        width: 100;
    } */
`
const LoginContainer = styled.div`
    @media screen and (max-width: 650px) {
        display: none;    
    }
`
const LogoContainer = styled(Navlogo)`
    @media screen and (max-width: 1054px) {
        display: none;    
    }
    &:hover {
        cursor: pointer;
    }
`


