import styled from "styled-components";
import { ReactComponent as Icon } from "../../assets/유저아이콘.svg";


const Container = styled.div`
    border-bottom: 2px solid #1B6DFF;
    display: flex;
    width: 897px;
    height: 220px;
    align-items: center;
    /* padding: 25px; */
`
const SmallContainer = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    height: 110px;
`


const Article = () => {
    return (
        <>
            <Container>
                <Icon />
                <SmallContainer>
                    <h2>질문입니다.</h2>
                    <div>저도 postman에서 계속 로딩만 뜨길래 오타났나 계속 찾다가, 강사님 답변 보고 해결해서 여기에 글 남겨요. /User.js 파일 에서 userSchema.metho...</div>
                    <div style={{color:"#747474"}}>닉네임 {new Intl.DateTimeFormat("ko", { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date())}</div>
                </SmallContainer>
            </Container>
        
        
        </>


    );

};

export default Article;