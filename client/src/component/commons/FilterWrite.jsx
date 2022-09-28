import styled from "styled-components";
import { ReactComponent as Penlogo } from "../../assets/ep_edit-pen.svg";
import Button from "./YellowButton";

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