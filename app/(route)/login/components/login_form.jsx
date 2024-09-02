"use client";
import { forwardRef, useEffect, useRef, useState } from "react";
import { LoginFormBox, LoginInputBox } from "@/styles/login-style";

const LoginForm = ({ signUp, logIn }) => {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState("log in");
  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const urlRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, [setMounted]);

  if (!mounted) {
    return null;
  }

  const confirm = async () => {
    if (mode === "log in") {
      logIn(idRef.current.value, passwordRef.current.value);
    } else {
      signUp(
        idRef.current.value,
        passwordRef.current.value,
        nameRef.current.value,
        emailRef.current.value,
        urlRef.current.value
      );
    }
  };

  return (
    <LoginFormBox mode={mode}>
      <div>
        <button onClick={() => setMode("log in")}>로그인</button>
        <button onClick={() => setMode("sign up")}>회원가입</button>
      </div>
      <div>
        <p>{mode}</p>
        {mode && mode === "log in" ? (
          <div>
            <LoginInput type="id" placeholder="아이디" ref={idRef} />
            <LoginInput
              type="password"
              placeholder="비밀번호"
              ref={passwordRef}
            />
          </div>
        ) : (
          <div>
            <LoginInput type="id" placeholder="아이디" ref={idRef} />
            <LoginInput
              type="password"
              placeholder="비밀번호"
              ref={passwordRef}
            />
            <LoginInput
              type="password-confirmation"
              placeholder="비밀번호 확인"
              ref={passwordConfirmRef}
            />
            <LoginInput type="name" placeholder="이름" ref={nameRef} />
            <LoginInput type="email" placeholder="이메일 주소" ref={emailRef} />
            <LoginInput
              type="url"
              placeholder="프로필 이미지 URL"
              ref={urlRef}
            />
          </div>
        )}
        <button onClick={confirm}>
          {mode === "log in" ? "로그인" : "회원가입"}하기
        </button>
      </div>
    </LoginFormBox>
  );
};

const LoginInput = forwardRef(function LoginInput({ type, placeholder }, ref) {
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  };

  const handleFocus = () => {
    setError(null);
  };

  const handleBlur = (e) => {
    if (type === "id" || type === "name") {
      if (!e.target.value || (e.target.value && e.target.value.length < 2))
        setError(true);
    }
    if (type === "email") {
      if (!validateEmail(e.target.value)) setError(true);
    }
  };

  return (
    <LoginInputBox>
      <input
        type={type && type.includes("password") ? "password" : "text"}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={ref}
      />
    </LoginInputBox>
  );
});

export default LoginForm;
