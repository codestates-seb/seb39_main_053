import styled from "styled-components";

const RedButton = styled.button`
    /* font-size: 3.8rem; */
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.basicColor};
    border-style: none;
    background-color:transparent;
    padding: 46px;
    position: relative;
    z-index: 0.1;
    /* width: 160%; */
    &:hover {
        cursor: pointer;
        color: #EB1D36;
        width: ${(props) => props.hoverWidth};
    }
    &:active {
        color: #B4172A;
    }
`
export default RedButton;