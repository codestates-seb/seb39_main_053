import React from 'react';
import styled from 'styled-components';

const Comment = ({ comment }) => {
    const parsedDate = new Date(comment.createdAt).toLocaleDateString('ko-kr');

    return (
        <li id={comment.id}>
            <Container>
                <span style={{fontSize:"12px", color:"#747474"}}>{new Intl.DateTimeFormat("ko", { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date())}</span>
                
                {/* <button
                className="tweet__deleteButton"
                onClick={() => handleDelete(comment.username, idx)}
                >     
                Delete</button> */}
                
                {comment.content}
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