import styled from "styled-components";
import Article from "./Article";
import FilterWriteBar from "../../../component/commons/FilterWrite";
import Navbar from "../../../component/commons/NavigationBar";
import SearchBar from "../../../component/commons/SearchBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const QuestionList = () => {
    const navigate = useNavigate();
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
                <FilterWriteBar onClick={() => {navigate(`/questionWrite`)}}/>
                <Article search={search} />
            </SmallContainer>
        </>
    );
};

export default QuestionList;

const SmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`