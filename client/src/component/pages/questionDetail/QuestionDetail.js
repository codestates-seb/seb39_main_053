import styled from "styled-components";
import Navbar from "../../commons/NavigationBar";
import { useState } from "react";
import Button from "../../commons/Button";
import IconSrc from "../../../assets/quesiton.svg"
import AskIconSrc from "../../../assets/ask.png"
import LogoIconSrc from "../../../assets/메인프로젝트로고남색 2.svg"

const QuestionDetail = () => {
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
    }

    return (
        <>
            <Navbar />
            {/* <>
                제목
                <>
                닉네임 날짜 / 질문수정 버튼
                </>
            </>
            질문내용? */}
            <Container>
                <TitleContainer>
                    <div style={{width:"750px"}}>
                    <Icon src={IconSrc} /> @Configuration은 한번만 달면 되는지 알고싶어요
                        <SmallContainer>
                            닉네임 날짜 <Button basicColor="white" style={{padding:"2px"}}>질문 수정</Button>
                        </SmallContainer>
                    </div>
                </TitleContainer>
                <BodyContainer>질문 내용</BodyContainer>

                <CommentContainer>
                    <AskContainer>
                        <Icon src={AskIconSrc} /> 총 0개의 답변이 달렸습니다
                    </AskContainer>
                    <CommentBobyContainer>
                        <Icon src={LogoIconSrc} />
                        <div>
                            <span>닉네임님, 답변해주세요!</span>
                            <span>모두에게 도움이 되는 답변의 주인공이 되어주세요!</span>
                        </div>
                    </CommentBobyContainer>
                </CommentContainer>
            </Container>
            
        </>
    );
};

export default QuestionDetail;


const TitleContainer = styled.div`
    background-color: #1B6DFF;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    width: 897px;
    height: 133px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
const BodyContainer = styled.div`
    background-color: #D4E3FF;
    border: solid 2px #1B6DFF;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    width: 897px;
    height: 303px;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding-top: 65px;
`
const SmallContainer = styled.div`
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding-top: 24px;
`
const Icon = styled.img`
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
    color: #828282;
`
const CommentBobyContainer = styled.div`
background-color: white;
border: none;
border-radius: 7px;
width: 798px;
height: 464px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* margin-top: 76px; */
`
const AskContainer = styled.div`
    justify-content: flex-start;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    padding-left: 20px;
    width: 798px;
`