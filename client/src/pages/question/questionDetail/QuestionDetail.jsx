import styled from "styled-components";
import Navbar from "../../../component/commons/NavigationBar";
import { useEffect, useState } from "react";
import Button from "../../../component/commons/YellowButton";
import IconSrc from "../../../assets/quesitonIcon.svg"
import AskIconSrc from "../../../assets/askIcon.png"
import LogoIconSrc from "../../../assets/smallLogo.svg"
import Comment from "./Comment";
import axios from "axios";
import { useParams } from "react-router-dom";

const QuestionDetail = () => {
    const [questionDetail, setQuestionDetail] = useState([]);
    let {qid} = useParams();
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value)
    }
    const [textArray, setTextArray] = useState([]);
    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
    }
    const handleButtonClick = (e) => {
        const answers = {
            id: textArray.length + 1,
            content: text,
            createdAt : new Date().toLocaleDateString('ko-kr'),
            updatedAt : new Date().toLocaleDateString('ko-kr'),
        };
        const newComments = [answers, ...textArray];
        setTextArray(newComments);
    };
    useEffect(() => {
        axios
        .get(`http://localhost:5000/questions/${qid}`)
        .then((res) => {
            setQuestionDetail(res.data);
            // console.log(res.data);       
        })
        .catch(err => console.log(err));
    }, [qid]);

    useEffect(() => {
        axios
        .get(`http://localhost:5000/answers`)
        .then((res) => {
            setTextArray(res.data);
            // console.log(res.data);       
        })
        .catch(err => console.log(err));
    }, []);

    const handleAnswerSubmit = () => {
        axios
        .post(`http://localhost:5000/answers`,
                {   
                    writer_id : "닉네임",
                    content : text,
                    created_at : new Intl.DateTimeFormat("ko", { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date())
                })
        .then((res) => {
            setTextArray(res.data);
        })
        .catch(err => console.log(err));
    }
    

    return (
        <>
            <Navbar />
            <Container>
                <TitleContainer>
                    <div style={{width:"750px"}}>
                    <Icon src={IconSrc} /> {questionDetail.title}
                        <SmallContainer>
                        {questionDetail.writer_id} {questionDetail.created_at} <Button basicColor="white" style={{padding:"2px"}}>질문 수정</Button>
                        </SmallContainer>
                    </div>
                </TitleContainer>
                <BodyContainer>{questionDetail.content}</BodyContainer>

                <CommentContainer>
                    <AskContainer>
                        <Icon src={AskIconSrc} /> 총 {textArray.length}개의 답변이 달렸습니다
                    </AskContainer>
                    <CommentBobyContainer onSubmit={onSubmit}>
                        <CommentTitleContainer>
                            <Icon src={LogoIconSrc}/>
                            <div style={{paddingTop: "26px"}}>
                                <span>닉네임님, 답변해주세요!</span><br />
                                <span>모두에게 도움이 되는 답변의 주인공이 되어주세요!</span>
                                
                            </div>
                        </CommentTitleContainer>
                            <InputBox type="text" value={text} onChange={onChange}>
                            
                            </InputBox>
                        <Button type="submit" basicColor="black" style={{padding:"2px"}} onClick={handleAnswerSubmit}>댓글 등록</Button>
                    </CommentBobyContainer>
                </CommentContainer>
                {textArray.map((answers) => {
                    console.log(answers);
                    return <Comment content={answers.content} created_at={answers.created_at} key={answers.id} />
                })}
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
const CommentTitleContainer = styled.div`
    display: flex;
    margin-top: 20px;
    margin-left: 18px;
`
const CommentBobyContainer = styled.form`
    position: relative;
    background-color: white;
    border: none;
    border-radius: 7px;
    width: 798px;
    height: 464px;
    display: flex;
    /* justify-content: flex-start; */
    align-items: flex-start;
    flex-direction: column;
    /* margin-top: 76px; */
    /* padding: 20px; */
`
const AskContainer = styled.div`
    justify-content: flex-start;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    padding-left: 20px;
    width: 798px;
`
const InputBox = styled.input.attrs({
    type: "text",
    required: true,
    placeholder: ""
})`
    /* position: absolute; */
    vertical-align: top;
    border: none;
    height: 398px;
    width: 798px;
    border-radius: 7px;
    z-index: 0.9;
    outline: none;
    padding-left: 5px;
`