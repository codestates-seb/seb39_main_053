import React from 'react';
import styled from 'styled-components';

const Comment = ({ content, created_at, key }) => {
    // console.log(content);
    return (
        <li id={key}>
            <Container>
                <div>{content}</div>
                <span style={{fontSize:"12px", color:"#747474"}}>{created_at}</span>
            </Container>
        </li>
    );
};

export default Comment;

const Container = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    border: 2px solid #1B6DFF;
    border-radius: 7px;
    width: 897px;
    height: 133px;
`