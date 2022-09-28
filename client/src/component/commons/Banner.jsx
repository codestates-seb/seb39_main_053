import styled from "styled-components";

const Banner = () => {
    return (
        <>
            <Container>
                <h2 style={{paddingBottom: "24px", fontSize: "25px"}}>질문&답변 게시판입니다.</h2>
                <h3 style={{color: "white", fontSize: "18px"}}>
                    이곳은 한국어 공부와 관련 된<br/>
                    질문과답변을 하는 곳 입니다.<br/>
                    모르는 문법이나 어휘를<br/>
                    자유롭게 질문하고 답변해주세요.<br/>
                    한국어가 서투른 친구들에게<br/>
                    큰 힘이 됩니다.                
                </h3>
            </Container>
        </>
    )
}

export default Banner;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1B6DFF;
    width: 315px;
    height: 410px;
    border-radius: 30px;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #FFDE32;
    line-height: 1.75;
`