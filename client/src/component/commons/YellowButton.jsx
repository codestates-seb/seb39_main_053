import styled from "styled-components";

const YellowButton = styled.button`
    /* font-size: 3.8rem; */
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.basicColor};
    border-style: none;
    background-color:transparent;
    padding: 46px;
    position: relative;
    /* width: 160%; */
    &:hover {
        cursor: pointer;
        color: #FFDE32;
        width: ${(props) => props.hoverWidth};
    }
    &:active {
        color: #C8B510;
    }
`
export default YellowButton;