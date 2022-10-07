import styled from "styled-components";
import Navbar from "../../../component/commons/NavigationBar";
import { useRef, useState } from "react";
import Button from "../../../component/commons/YellowButton";
import IconSrc from "../../../assets/quesitonIcon.svg"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useGetAxios from "../../../component/hooks/useGetAxios";

const QuestionModify = () => {
    const navigate = useNavigate();
    let {qid} = useParams();
    const questionDetail = useGetAxios(`http://localhost:5000/questions/${qid}`);
    
    const result = questionDetail.content
    const [qustionBody, setQustionBody] = useState(`${result}`);
    // console.log(result);
    const handleChangeBody = (e) => {
        setQustionBody(e.target.value)
    }
    const bodyRef = useRef(null);
    // console.log(bodyRef.current.value);

    const onSubmit = async (e) => {
        axios.defaults.withCredentials = true;

        console.log(null);

        e.preventDefault();
        setQustionBody("");

        try {
            const result = await axios
            .patch(`http://localhost:5000/questions/${qid}`,
                {   
                    content: bodyRef.current.value,
                    updated_at : new Intl.DateTimeFormat("ko", { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date()),
                })
            .then((res) => {
                navigate("/questionList");
                window.alert("질문이 수정되었습니다!");
            })    
            console.log(result);
        } catch(e){
            console.log(e);
        }           
    }
    
    
    return (
        <>
            <Navbar />
            <Container onSubmit={onSubmit}>
                <TitleContainer>
                    <div style={{width:"750px"}}>
                    <Icon src={IconSrc} /> {questionDetail.title}
                        <SmallContainer>
                            {questionDetail.writer_id} {questionDetail.created_at}
                            <div>
                                <Button
                                basicColor="white" style={{padding:"2px"}}>수정 확인</Button>
                            </div>
                        </SmallContainer>
                    </div>
                </TitleContainer>
                <BodyContainer type="text" value={qustionBody} onChange={handleChangeBody} ref={bodyRef} />
            </Container>               
        </>
    );
};

export default QuestionModify;

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
const BodyContainer = styled.textarea`
    background-color: #D4E3FF;
    border: solid 2px #1B6DFF;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    width: 897px;
    height: 303px;
`
const Container = styled.form`
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
