import { useState } from "react";
import styled from "styled-components";

interface userInfoType {
  email: string;
  nickName: string;
  password: string;
}

const SignUpFormCp = () => {
  const [userInfo, setUserInfo] = useState<userInfoType>({
    email: "",
    nickName: "",
    password: "",
  });
  return (
    <SignUpContainer>
      <form className="sign-in_form">
        <label className="sign-in_label-email">
          email
          <Input placeholder="이메일" type="email" />
        </label>
        <label className="sign-in_label-password">
          password
          <Input placeholder="비밀번호" type="password" />
        </label>
        <label className="sign-in_label-password">
          password
          <Input placeholder="비밀번호" type="password" />
        </label>
        <label className="sign-in_label-password">
          password
          <Input placeholder="비밀번호" type="password" />
        </label>
        <LoginButton>로그인</LoginButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUpFormCp;

const SignUpContainer = styled.div``;
const Input = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #dee2e6;
  padding-left: 5px;
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.color.main};
  }
`;

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
