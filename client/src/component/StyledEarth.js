import styled, { createGlobalStyle } from "styled-components";
import { ReactComponent as Earth } from "../assets/yellow-earth.svg"
import Button from "./Button";

const StyledEarth = styled(Earth)`
    display: none;
    position: absolute;
    ${Button}:hover & {
        display: block;
    }
`

export default StyledEarth;