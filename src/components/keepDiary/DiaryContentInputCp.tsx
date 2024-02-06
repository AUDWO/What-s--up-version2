import styled from "styled-components";

const DiaryContentInputCp = () => {
  return (
    <WriteContainer>
      <DiaryContentTextWrapper>
        <DiaryContentText>Content</DiaryContentText>
      </DiaryContentTextWrapper>
      <DiaryContentInputContainer>
        <DiaryContentTextarea />
      </DiaryContentInputContainer>
      <MakeDiaryButtonsWrapper>
        <MakeDiaryButton>게시</MakeDiaryButton>
        <DeleteDiaryButton>삭제</DeleteDiaryButton>
      </MakeDiaryButtonsWrapper>
    </WriteContainer>
  );
};

export default DiaryContentInputCp;

const WriteContainer = styled.div`
  width: 420px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 985px) {
    width: 600px;
    height: auto;
  }
  @media screen and (max-width: 622px) {
    width: 500px;
    height: auto;
  }
  @media screen and (max-width: 512px) {
    width: 100%;
  }
`;

const DiaryContentTextWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 4px;
`;

const DiaryContentText = styled.div`
  color: #acacac;
  font-size: 25px;
`;

const DiaryContentInputContainer = styled.div`
  width: 100%;
  border-top: 1px solid #c6c6c3;
  border-bottom: 1px solid #c6c6c3;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const DiaryContentTextarea = styled.textarea`
  width: 99%;
  border: none;
  resize: none;
  outline: none;
  height: 300px;
  font-size: 16px;
  color: #acacac;
`;

const MakeDiaryButtonsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  @media screen and (max-width: 985px) {
    margin-bottom: 70px;
  }
  @media screen and (max-width: 705px) {
    margin-bottom: 100px;
  }
`;

const MakeDiaryButton = styled.button`
  background-color: #4199ff;
  border: none;
  padding: 7px 20px 7px 20px;
  color: white;
  border-radius: 5px;
  margin-right: 40px;
`;

const DeleteDiaryButton = styled.button`
  background-color: #ed4956;
  border: none;
  padding: 7px 20px 7px 20px;
  color: white;
  border-radius: 5px;
  margin-left: 40px;
`;
