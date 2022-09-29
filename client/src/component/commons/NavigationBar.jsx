import styled from "styled-components";
import { ReactComponent as Navlogo } from "../../assets/navLogo.svg"
import Button from "./YellowButton";


const Navbar = () => {
    return (
        <>
            <Container>
                <Navlogo style={{height:80}}/>
                <div>
                    <Button basicColor="white" fontSize="1.1rem">질문&답변</Button>
                    <Button basicColor="white" fontSize="1.1rem">정보 공유</Button>
                    <Button basicColor="white" fontSize="1.1rem">친구 찾기</Button>
                </div>
                <div>
                    <Button basicColor="white" fontSize="0.9rem">회원가입</Button>
                    <Button basicColor="white" fontSize="0.9rem">로그인</Button>
                </div>
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
        /* &:hover {
            cursor: pointer;
            color: #FFDE32;
            width: 100;
        } */
    `