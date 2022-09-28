import styled from "styled-components";

const InputBox = styled.form`
`
const SearchInput = styled.input`
    width: 389px;
    height: 60px;
    border-radius: 7px;
    border-color: #A1A3A1;
    &:hover {
        cursor: pointer;
        background-color: #D4E3FF;
    } &:active {
        
        background-color: #BCC6F5;
        outline: none;
        
    }
`

const Input = () => {
    return (
        <>
            <InputBox>
                <SearchInput />
            </InputBox>
        </>
    )
}

export default Input;