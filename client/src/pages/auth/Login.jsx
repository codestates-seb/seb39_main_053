import axios from 'axios';
import React, { useRef } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import useAuthStore from '../../store/authStore';
import styled from 'styled-components';
import LoginButton from "../../component/commons/LoginButton";
import YellowButton from "../../component/commons/YellowButton";
import Input from "../../component/commons/Input";
import loginModalStore from '../../store/loginModalStore';
import signupModalStore from '../../store/signupModalStore';



const LogIn = () => {
    const navigate = useNavigate();
    const { isLogin, setIsLogin } = useAuthStore();
    const { loginModal, setLoginModal } = loginModalStore();
    const { signupModal, setSignupModal } = signupModalStore();

    const onSubmit = async (data) => {
        console.log(data);
        axios.defaults.withCredentials = true;

        try {
            const result = await axios
            // .post('/users/login', { email, password })
            .then((res) => {
                // console.log(res);
                localStorage.setItem("access_token", res.data.access_token);
                setIsLogin();
            })
            .then((res) => {
                navigate("/QuestionList");
                window.alert("로그인이 완료되었습니다!");
            })
        } catch(e){
            console.log(e);
            window.alert("로그인 실패!");
        }
    }   




    const schema = yup.object().shape({
        email: yup
            .string()
            .email("이메일 형식이 올바르지 않습니다.")
            .required("이메일은 필수 입력 사항입니다."),
        password: yup
        .string()
        .required("비밀번호는 필수 입력 사항입니다.")
        .min(6),
    });

    const { register, handleSubmit, watch, formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });
    
    const outside = useRef();
    const handleModalClose = (e) => {
        if (loginModal && outside.current === e.target) {
            setLoginModal(false);
        }
    }

    return (
        <ModalBackground ref={outside} onClick={ handleModalClose }>
        <Container onSubmit={handleSubmit(onSubmit)}>
            <ContainerSize>
                <YellowButton basicColor="white" style={{paddingTop:"30px"}} onClick={()=> { setLoginModal(!loginModal)}}>X</YellowButton>
                <span style={{fontSize:"1.8rem", color:"white", paddingBottom:"35px"}}>로그인</span>
                <Input
                    {...register("email")}
                    placeholder="이메일"    
                />
                {errors.email && <p>이메일 형식이 맞지 않습니다.</p>}
                
                <Input
                    {...register("password")}
                    placeholder="비밀번호"
                />
                {errors.password && errors.password.type === "required"
                    && <p> 비밀번호를 입력해주세요. </p>}
                {errors.password && errors.password.type === "min"
                    && <p> 6자리 이상의 올바른 비밀번호를 입력해주세요. </p>}
                
                <LoginButton type="submit"
                >로그인</LoginButton>

                <div>
                    <YellowButton basicColor="white" onClick={() => { setSignupModal(true); setLoginModal(!loginModal) }}>회원가입</YellowButton>
                    <YellowButton basicColor="white" onClick={() => {navigate(`/questionList`)}}>손님</YellowButton>
                </div>
            </ContainerSize>
        </Container>
        </ModalBackground>
    );
};

export default LogIn;


const Container = styled.form`
    background-color: #1B6DFF;
    width: 450px;
    height: 593px;
    border-radius: 13px;
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const ContainerSize = styled.div`
    width: auto;
    height: 493px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const ModalBackground = styled.div`
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 555;
`