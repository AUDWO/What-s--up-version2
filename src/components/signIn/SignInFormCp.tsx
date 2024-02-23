import styled from "styled-components";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import "./SignInFormCp.css";

import useCustomMutation from "@/customHooks/queryCustomHooks/useCustomMutation";
import { postSignIn } from "@/apis/authApis";
import userSignInfo from "@/store/userSignInfo";

const LoginFormCp = () => {
  const [userSignState, setUserSignState] = useRecoilState(userSignInfo);

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserSignState((prev) => ({ ...prev, email: userSignState.email }));
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserSignState((prev) => ({ ...prev, nickname: userSignState.nickname }));
  };

  const { mutate: handleSignIn } = useCustomMutation(postSignIn);

  const signInForm = {
    email: userSignState.email,
    password: userSignState.password,
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSignIn(signInForm);
    setUserSignState((prev) => ({ ...prev, email: "", password: "" }));
  };
  return (
    <LoginFormContainer>
      <form className="sign-in_form" onSubmit={handleSubmit}>
        <Label>
          email
          <Input placeholder="이메일" type="email" onChange={handleIdChange} />
        </Label>
        <Label>
          password
          <Input
            placeholder="비밀번호"
            type="password"
            onChange={handlePasswordChange}
          />
        </Label>
        <LoginButton>로그인</LoginButton>
      </form>
    </LoginFormContainer>
  );
};

export default LoginFormCp;

const LoginFormContainer = styled.div``;

const Label = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  color: #acacac;
`;

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
