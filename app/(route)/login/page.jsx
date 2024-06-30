"use client";

import LoginForm from "./components/login_form";
import { LoginPageLayout } from "@/styles/login-style";

const LoginPage = () => {
  return (
    <LoginPageLayout>
      <LoginForm />
    </LoginPageLayout>
  );
};

export default LoginPage;
