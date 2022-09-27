import { useState } from "react";
import styled from "styled-components";

const Ad = ({text}) => {
    const [isHovering, setIsHovering] = useState(0);
    
    
    return (
      <div
        onMouseOut={() => {setIsHovering(false)}}
        onMouseOver={() => {setIsHovering(true)}}
      > 
      더보기                 
          {isHovering ? <Modal a={text}/>: ""}       
        </div>
        )}
        function Modal({a}){
            return (
                <Containal>{a}</Containal>
            )
        }

        export default Ad;

const Containal = styled.div `
    background-color: red;
`