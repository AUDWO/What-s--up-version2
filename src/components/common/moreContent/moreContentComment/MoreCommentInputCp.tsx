import styled from "styled-components";
const MoreCommentInputCp = () => {
  return (
    <MoreCommentInputWrapper>
      <MoreCommentInput />
      <MoreCommentInputButton>게시</MoreCommentInputButton>
    </MoreCommentInputWrapper>
  );
};

export default MoreCommentInputCp;

const MoreCommentInputWrapper = styled.div`
  display: flex;
  height: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`;
const MoreCommentInput = styled.input`
  width: 90%;
  outline: none;
  border: none;
  background-color: #e8e8e8;
  padding-left: 10px;
  border-radius: 8px 0px 0px 8px;
`;

const MoreCommentInputButton = styled.button`
  width: 50px;
  border: none;
  border-radius: 0px 8px 8px 0px;
  background-color: #e8e8e8;
  color: #4199ff;
  font-weight: 600;
`;
