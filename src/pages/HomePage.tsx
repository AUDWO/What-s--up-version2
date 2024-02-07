import styled from "styled-components";
import MainSideNavCp from "@components/common/mainSideNav/MainSideNavRCP";
import SubSideNavRCp from "@components/subSideNav/SubSideNavRCp";
import StoryContentsRCp from "@components/homeStory/StoryContentsRCp";
import PostContentsRCp from "@components/post/PostContentsRCp";

import MainIcon from "@components/icons/MainIcon";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <header className="relative-header">
        <HeaderIconWrapper>
          <MainIcon />
        </HeaderIconWrapper>
        <HeaderTitle>WHAT'S UP</HeaderTitle>
      </header>
      <Container>
        <MainSideNavCp />
        <MainContentsContainer>
          <StoryContentsRCp />
          <PostContentsRCp />
          <SubSideNavRCp />
        </MainContentsContainer>
      </Container>
    </div>
  );
};

export default HomePage;

const Container = styled.div`
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1250px) {
    justify-content: flex-end;
  }
  @media screen and (max-width: 1019px) {
    justify-content: center;
  }

  @media screen and (max-width: 799px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 705px) {
    justify-content: center;
  }
`;

const HeaderIconWrapper = styled.div``;
const HeaderTitle = styled.div`
  font-family: Orbitron;
  font-size: 25px;
  color: #f7dd07;
  margin-left: 10px;
`;

const MainContentsContainer = styled.div`
  height: auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1250px) {
    margin-right: 320px;
  }
  @media screen and (max-width: 1019px) {
    margin: 0;
  }
  @media screen and (max-width: 799px) {
    margin-left: 100px;
  }
  @media screen and (max-width: 705px) {
    margin: 0;
  }

  @media screen and (max-width: 960px) {
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
