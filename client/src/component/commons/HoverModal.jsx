import { useState } from "react";
import styled from "styled-components";
import {ReactComponent as MoreLogo} from "../../assets/moreLogo.svg";

const HoverModal = ({text}) => {
    const [isHovering, setIsHovering] = useState(false);
    
    
    return (
      
      <span
        onMouseOut={() => {setIsHovering(false)}}
        onMouseOver={() => {setIsHovering(true)}}
      >
      더보기<MoreLogo/>                 
          {isHovering ? <Modal abc={text}/>: ""}       
        </span>
        
        
        )}
        function Modal({abc}){
            return (
                <>
                {abc.map((e,index) => <Containal key={index}>{e}</Containal>)}
                </>
            )
        }

        export default HoverModal;

const Containal = styled.div `
    
    background-color:#1B6DFF;
`