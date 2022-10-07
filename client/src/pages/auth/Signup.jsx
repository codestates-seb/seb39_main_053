import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginButton from "../../component/commons/LoginButton";
import YellowButton from "../../component/commons/YellowButton";
import Input from "../../component/commons/Input";
import signupModalStore from '../../store/signupModalStore';
import loginModalStore from '../../store/loginModalStore';


const SignUp = () => {
    const { signupModal, setSignupModal } = signupModalStore();
    const { loginModal, setLoginModal } = loginModalStore();
    
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = async (data) => {
        console.log(data);
        

        try{
            const result = await axios
            // .post('/users/sign-up', { email, password, password_confirm, nickname }),
            .then((res) => {
                setSuccess(true);
            })
        } catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        if (success) {
            // navigate("/login");
            window.alert("회원가입을 축하합니다 !");
        }
    }, [success, navigate]);

    const password = useRef();
    password.current = watch("password");

    const outside = useRef();
    const handleModalClose = (e) => {
        if (signupModal && outside.current === e.target) {
            setSignupModal(false);
        }
    }

    return (
        <ModalBackground ref={outside} onClick={ handleModalClose }>
        <Container onSubmit={handleSubmit(onSubmit)}>
            <YellowButton basicColor="white" style={{padding:"15px"}} onClick={()=> { setSignupModal(!signupModal)}}>X</YellowButton>
            <span style={{fontSize:"1.8rem", color:"white", paddingBottom:"35px"}}>회원가입</span>
            
            <Input
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                placeholder="이메일"    
            />
            {errors.email && <p>이메일 형식이 맞지 않습니다.</p>}

            <Input
                {...register("nickname", { required: true, maxLength: 10 })}
                placeholder="닉네임"
            />
            {errors.nickname && errors.nickname.type === "required"
                && <p> 닉네임을 입력해주세요.</p>}
            {errors.nickname && errors.nickname.type === "maxLength"
                && <p> 10자리 이하의 닉네임을 입력해주세요.</p>}
            
            <Input
                {...register("password", { required: true, minLength: 6 })}
                placeholder="비밀번호"
            />
            {errors.password && errors.password.type === "required"
                && <p> 비밀번호를 입력해주세요.</p>}
            {errors.password && errors.password.type === "minLength"
                && <p> 6자리 이상의 올바른 비밀번호를 입력해주세요.</p>}
                
            
            <Input
                {...register("password_confirm", { required: true,
                    validate: (value) => value === password.current })}
                placeholder="비밀번호 확인"
            />
            {errors.password_confirm && errors.password_confirm.type === "required"
                && <p> 비밀번호를 다시 입력해주세요.</p>}
            {errors.password_confirm && errors.password_confirm.type === "validate"
                && <p> 비밀번호와 일치하지 않습니다.</p>}
            
            <LoginButton type="submit"
            > 가입하기
            </LoginButton>
            <div>
                    <YellowButton basicColor="white" style={{paddingTop:"25px"}} onClick={() => { setLoginModal(true); setSignupModal(!signupModal) }}>로그인</YellowButton>
                    <YellowButton basicColor="white" style={{paddingTop:"25px"}} onClick={() => {navigate(`/questionList`)}}>손님</YellowButton>
            </div>
        </Container>
        </ModalBackground>
    );
};

export default SignUp;


const Container = styled.form`
    background-color: #1B6DFF;
    width: 450px;
    height: 593px;
    border-radius: 13px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const ModalBackground = styled.div`
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 555;
`
