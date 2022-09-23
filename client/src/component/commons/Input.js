import styled from "styled-components";

const inputBox = styled.form`
`

const Input = () => {
    return (
        <>
            <inputBox onSubmit={onSubmit}>
                <input onChange={onChange} />
            </inputBox>
        </>

    )

}