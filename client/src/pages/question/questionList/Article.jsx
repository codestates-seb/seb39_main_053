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
    

    const navigate = useNavigate();

    const filterdQuestions = questions.filter( question=> 
        question.content.toUpperCase().includes(search.toUpperCase()));
        

    useEffect(() => {
        axios
        .get(`http://localhost:5000/questions`)
        .then((res) => {
            setQuestions(res.data);
            // console.log(res.data);
        })
        .then(() => setIsLoading(false))
    },[]);
    



        return (
            <div>
                    {filterdQuestions.map(data => (
                        <Container key={data.id}>
                        <Icon src={lconSrc} />
                        <SmallContainer2>
                            <HoverH2 onClick={() => {navigate(`/questionDetail/${data.id}`)}}>{data.title}</HoverH2>
                            <div>{data.content}</div>
                            <div style={{color:"#747474"}}>{data.writer_id} {data.created_at}</div>
                        </SmallContainer2>
                        </Container>
                    ))}
            </div>
        );
}

export default Article;

const Container = styled.div`
    border-bottom: 2px solid #1B6DFF;
    display: flex;
    width: 897px;
    height: 220px;
    /* justify-content: space-between; */
    align-items: center;
    /* padding: 25px; */
`
const SmallContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 110px;
`
const Icon = styled.img`
`
const HoverH2 =styled.h2`
    &:hover {
        cursor: pointer;
        color: #FFDE32;
    }
`