import styled, { createGlobalStyle } from "styled-components";
import logoSrc from "../../assets/yellow-earth.svg"
import Button from "./YellowButton";

const Earth = styled.img`
    display: none;
    position: absolute;
    ${Button}:hover & {
        display: block;
    }
`

const StyledEarth = () => {
    return (
        <>
            <Earth src= {logoSrc}/>
        </>

    )

}

export default StyledEarth;