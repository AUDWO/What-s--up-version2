import PostCommentMd from "@/modals/PostCommentMd";
import MainSideNavCp from "@components/common/mainSideNav/MainSideNavRCP";
import MoreContactCp from "@components/common/moreContent/MoreContactCp";
import MoreCommentsRCp from "@components/common/moreContent/moreContentComment/MoreCommentsRCp";
import DiaryContentCp from "@components/diary/DiaryContentCp";
import DiaryImgCp from "@components/diary/DiaryImgCp";
import DiaryProfileCp from "@components/diary/DiaryProfileCp";
import DiaryTitleCp from "@components/diary/DiaryTitleCp";
import styled from "styled-components";

const DiaryPage = () => {
  return (
    <div>
      <PostCommentMd />
      <Container>
        <MainSideNavCp />
        <MainContentContainer>
          <DiaryContentContainer>
            <DiaryProfileCp />
            <DiaryTitleCp />
            <DiaryImgCp />
            <DiaryContentCp />
            <MoreContactCp />
          </DiaryContentContainer>
        </MainContentContainer>
        <MoreCommentsRCp />
      </Container>
    </div>
  );
};

export default DiaryPage;

const Container = styled.div`
  width: 100wh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding-left: 270px;
  @media screen and (max-width: 1200px) {
    padding-left: 100px;
  }

  @media screen and (max-width: 901px) {
    padding-left: 100px;
  }
  @media screen and (max-width: 705px) {
    padding-left: 0;
  }
`;

const MainContentContainer = styled.div`
  width: 700px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const DiaryContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 734px) {
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
