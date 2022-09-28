import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "../../assets/searchIcon.svg"
import Button from "./YellowButton"; 

const SearchBar = ({onChange, onSubmit, search}) => {
    return (
        <SmallContainer > 
            <SearchContainer onSubmit={onSubmit}>
                <Search />
                <SearchInput type="text" value={search} onChange={onChange}/>
            </SearchContainer>
            <Button type="submit" basicColor="black" style={{padding: "7px"}}>검색</Button>      
        </SmallContainer>
        
    )
}

export default SearchBar;


const SearchContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: relative; */
    height: 59px;
    width: 450px;
    border-radius: 7px;
    z-index: 0.5;
    opacity: 1;
    border: solid 1px #A1A3A1;
    padding: 5px;
    &:hover{  
        background-color: #D4E3FF;
        cursor: pointer;
    } &:active{  
        background-color: #BCC6F5;
        cursor: pointer;
    }
`

const SearchInput = styled.input.attrs({
    type: "text",
    required: true,
    placeholder: "궁금한 질문을 검색해보세요!"
})`
    /* position: absolute; */
    border: none;
    height: 55px;
    width: 450px;
    border-radius: 7px;
    z-index: 0.9;
    outline: none;
    padding-left: 5px;
    &:hover{  
        background-color: #D4E3FF;
        cursor: pointer;
    } &:active{  
        background-color: #BCC6F5;
        cursor: pointer;
    }    
`
const SmallContainer = styled.div`
    display: flex;
`