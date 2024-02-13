import styled from "styled-components";
import { useRef } from "react";

const DiaryTitleInputCp = () => {
  const textarea = useRef<HTMLTextAreaElement | null>(null);

  const handleResizeHeight = () => {
    if (textarea.current) {
      textarea.current.style.height = "auto"; //height 초기화
      textarea.current.style.height = textarea.current.scrollHeight + "px";
    }
  };
  return (
    <DiaryTitleInputSection>
      <DiaryTitleText>Title </DiaryTitleText>
      <DiaryTitleTextArea
        rows={1}
        onChange={handleResizeHeight}
        ref={textarea}
        placeholder="제목을 입력해주세요."
      >
        d
      </DiaryTitleTextArea>
    </DiaryTitleInputSection>
  );
};

export default DiaryTitleInputCp;

const DiaryTitleInputSection = styled.div`
  width: 100%;
  height: auto;
  margin-top: 40px;
`;

const DiaryTitleText = styled.div`
  font-size: 24px;
  color: #acacac;
  margin-bottom: 5px;
`;

const DiaryTitleTextArea = styled.textarea`
  width: 100%;
  height: auto;
  border: none;
  outline: none;
  resize: none;
  font-size: 20px;
  border-top: 1px solid #c6c6c3;
  border-bottom: 1px solid #c6c6c3;
  padding-top: 17px;
  color: #acacac;
  background-color: ${(props) => props.theme.bgColor};
  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #acacac;
  }
`;
