import { useNavigate } from "react-router-dom";
import styled from "styled-components";
<<<<<<< HEAD:client/src/component/commons/FilterWrite.jsx
import { ReactComponent as Penlogo } from "../../assets/ep_edit-pen.svg";
import Button from "./YellowButton";
=======
import { ReactComponent as Penlogo } from "../../assets/penIcon.svg";
import RedButton from "./RedButton";

const FilterWriteBar = ({onClick}) => {
    const navigate = useNavigate();
    
    return (
        <>
            <Container>
                <SmallContainer>
                    <h3 style={{fontSize:"14px", color: "red"}}>● 최신순</h3>
                    <h3 style={{fontSize:"14px"}}>● 오래된순</h3>
                </SmallContainer>
                <RealSmall>
                    <Penlogo/>
                    <RedButton style={{padding: "7px"}} onClick={onClick}>글쓰기</RedButton>
                </RealSmall>
            </Container>
        </>
    );
};

export default FilterWriteBar;
>>>>>>> 0a0593d28ffd01e5d80fdad215652271ff57ca09:client/src/component/commons/FilterWrite.js

const Container = styled.div`
    border-bottom: 2px solid #1B6DFF;
    display: flex;
    height: 59px;
    justify-content: space-between;
    align-items: center;
`
const SmallContainer = styled.div`
    display: flex;
    width: 220px;
    padding-left: 25px;
    justify-content: space-around;
`
const RealSmall = styled.div`
display: flex;
<<<<<<< HEAD:client/src/component/commons/FilterWrite.jsx
`

const FilterWriteBar = ({onClick}) => {
    return (
        <>
            <Container>
                <SmallContainer>
                    <h3 style={{fontSize:"14px", color: "red"}}>● 최신순</h3>
                    <h3 style={{fontSize:"14px"}}>● 오래된순</h3>
                </SmallContainer>
                <RealSmall>
                    <Penlogo/>
                    <Button onClick = {onClick} style={{padding: "7px"}}>글쓰기</Button>
                </RealSmall>
            </Container>
        
        
        </>


    );

};

export default FilterWriteBar;
=======
`
>>>>>>> 0a0593d28ffd01e5d80fdad215652271ff57ca09:client/src/component/commons/FilterWrite.js
