import styled from "styled-components";
import FilterWriteBar from "../../../component/commons/FilterWrite";
import Navbar from "../../../component/commons/NavigationBar";
import SearchBar from "../../../component/commons/SearchBar";
import { useState } from "react";
import Input from "../../../component/commons/Input";
import Button from "../../../component/commons/YellowButton";



const QuestionWrite = () => {
    // 로그인 기능 구현이후에 로그인 한 해당 유저의 닉네임으로 넣을 예정
    const [username, setUser] = useState("아이유");


    const [qustionTitle, setQustionTitle] = useState("");
    const [qustionBody, setQustionBody] = useState("");
    const handleChangeTitle = (e) => {
        setQustionTitle(e.target.value)
    }
    const handleChangeBody = (e) => {
        setQustionBody(e.target.value)
    }
    const onSubmit = (e) => {           
        e.preventDefault();
        setQustionTitle("");
        setQustionBody("");
    }
    // const handleButtonClick = (e) => {
    //     const comment = {
    //         id: textArray.length + 1,
    //         content: text,
    //         createdAt : new Date().toLocaleDateString('ko-kr'),
    //         updatedAt : new Date().toLocaleDateString('ko-kr'),
    //     };
    //     const newComments = [comment, ...textArray];
    //     setTextArray(newComments);
    // };

    return (
        <>
            <Navbar />
            
            <SmallContainer onSubmit={onSubmit}>
                <TitleInput type="text" value={qustionTitle} onChange={handleChangeTitle}/>

                <BodyStyle />
                <BodyInput type="text" value={qustionBody} onChange={handleChangeBody} />
                <ButtonContainer>
                    <Button>취소</Button>
                    <Button>등록</Button>
                </ButtonContainer>
            </SmallContainer >
        </>
    );
};

export default QuestionWrite;

const SmallContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 88px;
`
const TitleInput = styled.input.attrs({
    type: "text",
    required: true,
    placeholder: "제목을 입력하세요."
})`
    /* position: absolute; */
    border: 2px solid #1B6DFF;
    height: 58px;
    width: 812px;
    border-radius: 7px;
    z-index: 0.9;
    outline: none;
    padding-left: 18px;
    margin-bottom: 10px;
    &:hover{  
        background-color: #D4E3FF;
        cursor: pointer;
    } &:active{  
        background-color: #BCC6F5;
        cursor: pointer;
    }   
`
const BodyStyle = styled.div`
    /* position: absolute; */
    border: 2px solid #1B6DFF;
    height: 58px;
    width: 812px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    z-index: 0.9;  
`
const BodyInput = styled.textarea.attrs({
    type: "text",
    required: true,
    placeholder:
    `- 학습 관련 질문을 남겨주세요. 상세히 작성하면 더 좋아요!
- 먼저 유사한 질문이 있었는지 검색해보세요.
- 서로 예의를 지키며 존중하는 문화를 만들어 가요.`
})`
    /* position: absolute; */
    border-left: 2px solid #1B6DFF;
    border-right: 2px solid #1B6DFF;
    border-bottom: 2px solid #1B6DFF;
    border-top: none;
    height: 534px;
    width: 812px;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    z-index: 0.9;
    outline: none;
    padding-left: 18px;
    &:hover{  
        background-color: #D4E3FF;
        cursor: pointer;
    } &:active{  
        background-color: #BCC6F5;
        cursor: pointer;
    } ::placeholder {
    font-size: 1.1em;
}   
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 812px;
`