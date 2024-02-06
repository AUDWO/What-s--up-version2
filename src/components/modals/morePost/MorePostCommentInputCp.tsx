import styled from "styled-components";
import { useRef } from "react";

const MorePostCommentInputCp = () => {
  const textarea = useRef<HTMLTextAreaElement>(null);
  const handleResizeHeight = () => {
    if (textarea.current) {
      textarea.current.style.height = "auto"; //height 초기화
      textarea.current.style.height = textarea.current.scrollHeight + "px";
    }
  };
  return (
    <CommentInputContainer>
      <CommentTextarea ref={textarea} onChange={handleResizeHeight} />
      <CommentInputButton>게시</CommentInputButton>
    </CommentInputContainer>
  );
};

export default MorePostCommentInputCp;

const CommentInputContainer = styled.div`
  position: absolute;
  bottom: 0;
  background-color: white;
  width: 100%;
  min-height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;
  align-items: center;
  padding-top: 10px;
`;

const CommentInputButton = styled.button`
  background-color: white;
  border: none;
  color: #4199ff;
  font-weight: 700;
  cursor: pointer;
`;

const CommentTextarea = styled.textarea`
  width: 83%;
  outline: none;
  border: none;
  padding-left: 20px;
  resize: none;
`;
