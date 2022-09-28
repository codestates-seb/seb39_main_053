import styled from "styled-components";
import lconSrc from "../../../assets/userIcon.svg"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import QuestionList from "./QuestionList";
import SearchBar from "../../../component/commons/SearchBar";



const Article = ({search}) => {
    // console.log(search)

    const [questions, setQuestions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    

    const navigate = useNavigate();

    const filterdQuestions = questions.filter( question=> 
        question.questionBody.toUpperCase().includes(search.toUpperCase()));
        

    useEffect(() => {
        axios
        .get(`http://localhost:5000/questions?_page=${page}&_limit=30&_sort=id&_order=desc`)
        .then((res) => {
            setQuestions(res.data);
            // console.log(res.data);
        }).then(() => setIsLoading(false))
    },[page]);
    

    return (
        <>
        {filterdQuestions.map((data) => {
            
            const {questionId, questionWriter, questionTitle, questionBody, createdAt} = data;

        return (
            <div key={questionId}>
                <Container>
                    <Icon src={lconSrc} />
                    <SmallContainer>
                        <h2>질문입니다.</h2>
                        <div onClick={() => {navigate(`/detail`)}}>{questionBody}</div>
                        {/* <div onClick={() => {navigate(`/detail/${questionId}`)}}>{questionBody}</div> */}
                        <div style={{color:"#747474"}}>{questionWriter} {new Intl.DateTimeFormat("ko", { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date())}</div>
                    </SmallContainer>
                </Container>
            </div>
        );
    })};
    </>
    )
}

export default Article;

const Container = styled.div`
    border-bottom: 2px solid #1B6DFF;
    display: flex;
    width: 897px;
    height: 220px;
    justify-content: space-between;
    align-items: center;
    /* padding: 25px; */
`
const SmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 110px;
`
const Icon = styled.img`
`