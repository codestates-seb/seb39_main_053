import styled from "styled-components";
import Article from "./Article";
import FilterWriteBar from "../../commons/FilterWrite";
import Navbar from "../../commons/NavigationBar";
import SearchBar from "../../commons/SearchBar";
import { useState } from "react";

const SmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const QuestionList = () => {
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
        // console.log(search);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setSearch("");
        // console.log(search);
    }

    return (
        <>
            <Navbar />
            
            <SmallContainer>
                <SearchBar search={search} setSearch={setSearch} onChange={onChange} onSubmit={onSubmit}/>
                <FilterWriteBar />
                
                <Article search={search}/>
            </SmallContainer>
        </>
    );
};

export default QuestionList;