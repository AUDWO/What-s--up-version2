import MainSideNavCp from "@components/common/mainSideNav/MainSideNavRCP";
import DiaryAdvancedSetUpCp from "@components/keepDiary/DiaryAdvancedSetUpCp";
import DiaryContentInputCp from "@components/keepDiary/DiaryContentInputCp";
import DiaryImgSelectCp from "@components/keepDiary/DiaryImgSelectCp";
import DiaryTitleInputCp from "@components/keepDiary/DiaryTitleInputCp";
import styled from "styled-components";

const KeepDiaryPage = () => {
  return (
    <Container>
      <MainSideNavCp />
      <MainContents>
        <WriteContainer>
          <DiaryTitleInputCp />
          <WriteContainer1Wrapper>
            <DiaryImgSelectCp />
            <DiaryAdvancedSetUpCp />
          </WriteContainer1Wrapper>
        </WriteContainer>
        <DiaryContentInputCp />
      </MainContents>
    </Container>
  );
};

export default KeepDiaryPage;

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

const WriteContainer1Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 985px) {
    flex-direction: row;
  }
  @media screen and (max-width: 623px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: auto;
  padding-left: 270px;
  @media screen and (max-width: 1200px) {
    padding-left: 100px;
  }
  @media screen and (max-width: 985px) {
    flex-direction: column;
  }
  @media screen and (max-width: 705px) {
    padding-left: 0;
  }
`;

const MainContents = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 985px) {
    flex-direction: column;
    align-items: center;
  }
  margin-bottom: 80px;
`;
