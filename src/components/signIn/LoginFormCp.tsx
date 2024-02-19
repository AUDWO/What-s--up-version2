import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import "./LoginFormCp.css";

const LoginFormCp = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 페이지 새로 고침 방지
    console.log(`아이디: ${id}, 비밀번호: ${password}`);
    // 로그인 로직 구현
  };
  return (
    <LoginFormContainer>
      <form className="sign-in_form">
        <label className="sign-in_label-email">
          email
          <Input placeholder="이메일" type="email" onChange={handleIdChange} />
        </label>
        <label className="sign-in_label-password">
          password
          <Input
            placeholder="비밀번호"
            type="password"
            onChange={handlePasswordChange}
          />
        </label>
        <LoginButton>로그인</LoginButton>
      </form>
    </LoginFormContainer>
  );
};

export default LoginFormCp;

const LoginFormContainer = styled.div``;

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
