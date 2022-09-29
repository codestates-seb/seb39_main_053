import axios from 'axios';
import React, { useRef } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import useAuthStore from '../../store/authStore';

const LogIn = () => {
    const navigate = useNavigate();
    const { isLogin, setIsLogin } = useAuthStore();

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
    
    // const password = useRef();
    // password.current = watch("password");

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <input
                {...register("email")}
                placeholder="이메일"    
            />
            {errors.email && <p>이메일 형식이 맞지 않습니다.</p>}
            
            <input
                {...register("password")}
                placeholder="비밀번호"
            />
            {errors.password && errors.password.type === "required"
                && <p> 비밀번호를 입력해주세요. </p>}
            {errors.password && errors.password.type === "min"
                && <p> 6자리 이상의 올바른 비밀번호를 입력해주세요. </p>}
            
            <input type="submit"
                style={{ marginTop: '40px' }}
            />
        </form>
    );
};


export default LogIn;