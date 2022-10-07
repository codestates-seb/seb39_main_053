import styled from "styled-components";

const LoginButton = styled.div`
    background-color: #FFDE32;
    width: 389px;
    height: 60px;
    font-size: 14px;
    color: black;
    border-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    &:hover{  
        background-color: #C8B510;
        cursor: pointer;
    } &:active{  
        background-color: #AD9D0D;
        cursor: pointer;
    }
` 

export default LoginButton;