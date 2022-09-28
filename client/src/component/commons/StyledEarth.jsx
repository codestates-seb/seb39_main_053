import styled, { createGlobalStyle } from "styled-components";
import logoSrc from "../../assets/yellowEarthIcon.svg"
import Button from "./YellowButton";

const StyledEarth = () => {
    return (
        <>
            <Earth src= {logoSrc}/>
        </>

    )

}

export default StyledEarth;

const Earth = styled.img`
    display: none;
    position: absolute;
    ${Button}:hover & {
        display: block;
    }
`