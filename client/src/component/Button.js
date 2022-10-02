import styled from "styled-components";

const Button = styled.button`
    /* font-size: 3.8rem; */
    font-size: ${(props) => props.fontSize};
    color: white;
    border-style: none;
    background-color:transparent;
    padding: 46px;
    position: relative;
    width: 160%;
    &:hover {
        cursor: pointer;
        color: #FFDE32;
    }
    &:active {
        color: #C8B510;
    }
`
export default Button;