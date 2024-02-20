import styled from "styled-components";

const SignFormCp = () => {
  return (
    <Form>
      <Label>
        email
        <Input placeholder="이메일" type="email" />
      </Label>
      <Label>
        nickName
        <Input placeholder="이메일" type="email" />
      </Label>
      <Label>
        password
        <Input placeholder="이메일" type="email" />
      </Label>
      <Label>
        password-check
        <Input placeholder="이메일" type="email" />
      </Label>

      <Button>로그인</Button>
    </Form>
  );
};

export default SignFormCp;

const Form = styled.div`
  width: 350px;
`;

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

const Button = styled.button`
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
