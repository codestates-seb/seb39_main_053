import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);

        try{
            const result = await axios
            // .post('/users/sign-up', { email, password, password_confirm, nickname }),
            .then(() => {
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

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <input
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                placeholder="이메일"    
            />
            {errors.email && <p>This email field is required</p>}

            <input
                {...register("nickname", { required: true, maxLength: 10 })}
                placeholder="닉네임"
            />
            {errors.nickname && errors.nickname.type === "required"
                && <p> This nickname field is required</p>}
            {errors.nickname && errors.nickname.type === "maxLength"
                && <p> Your input exceed maximum length</p>}
            
            <input
                {...register("password", { required: true, minLength: 6 })}
                placeholder="비밀번호"
            />
            {errors.password && errors.password.type === "required"
                && <p> This password field is required</p>}
            {errors.password && errors.password.type === "minLength"
                && <p> Password must have at least 6 characters</p>}
                
            
            <input
                {...register("password_confirm", { required: true,
                    validate: (value) => value === password.current })}
                placeholder="비밀번호 확인"
            />
            {errors.password_confirm && errors.password_confirm.type === "required"
                && <p> This password confirm field is required</p>}
            {errors.password_confirm && errors.password_confirm.type === "validate"
                && <p>The passwords do not match</p>}
            
            <input type="submit"
                style={{ marginTop: '40px' }}
            />
        </form>
    );
};

export default SignUp;