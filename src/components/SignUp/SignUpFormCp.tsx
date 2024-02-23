import { useState } from "react";
import styled from "styled-components";

import EmailInput from "./Input/EmailInput";
import NicknameInput from "./Input/NicknameInput";
import PasswordInput from "./Input/PasswordInput";
import PasswordCheckInput from "./Input/PasswordCheckInput";
import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import { postSignUp } from "@/apis/authApis";
import { SignUpForm, SignUpRes } from "@/types/authTypes";
import { useRecoilValue } from "recoil";
import userSignInfo from "@/store/userSignInfo";

const SignUpFormCp = () => {
  const { mutate: handleSignUp } = useCustomMutation<SignUpRes, SignUpForm>(
    postSignUp
  );

  const userSignState = useRecoilValue(userSignInfo);

  const signUpForm = {
    email: userSignState.email,
    nickname: userSignState.nickname,
    password: userSignState.password,
  };

  return (
    <SignUpContainer>
      <form
        className="sign-in_form"
        onSubmit={(e) => {
          e.stopPropagation();
          handleSignUp(signUpForm);
        }}
      >
        <EmailInput />
        <NicknameInput />
        <PasswordInput />
        <PasswordCheckInput />
        <LoginButton type="submit">회원가입</LoginButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUpFormCp;

const SignUpContainer = styled.div``;

const LoginButton = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.color.main};
  color: white;
  font-weight: 500;
  margin-top: 40px;
  height: 40px;
  border: none;
  border-radius: 7px;
  font-size: 16px;
  cursor: pointer;
`;
