import styled from "styled-components";
import lconSrc from "../../../assets/userIcon.svg"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import useGetAxios from "../../../component/hooks/useGetAxios"

const Article = ({search}) => {
    const questions = useGetAxios(`http://localhost:5000/questions`)
    const navigate = useNavigate();

    const filterdQuestions = questions.filter( question=> 
        question.content.toUpperCase().includes(search.toUpperCase()));
        
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