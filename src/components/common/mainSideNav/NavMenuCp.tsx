import styled from "styled-components";
import {
  HomeIcon,
  SearchIcon,
  MakePostIcon,
  DiaryContentsIcon,
  KeepDiaryIcon,
  ProfileIcon,
  MoreIcon,
} from "@components/icons/MainSideNavIcons";
import { useNavigate } from "react-router-dom";
import useModal from "@/customHooks/useModal";

const NavMenuCp = () => {
  const navigate = useNavigate();
  const { onOpen } = useModal("makePostMd");
  return (
    <MainSideNavMenuList>
      <MainSideNavMenuWrapper
        onClick={() => {
          navigate("/");
        }}
      >
        <HomeIcon />
        <MainSideNavMenuTitle>홈</MainSideNavMenuTitle>
      </MainSideNavMenuWrapper>
      <MainSideNavMenuWrapper>
        <SearchIcon />
        <MainSideNavMenuTitle>검색</MainSideNavMenuTitle>
      </MainSideNavMenuWrapper>
      <MainSideNavMenuWrapper onClick={onOpen}>
        <MakePostIcon />
        <MainSideNavMenuTitle>만들기</MainSideNavMenuTitle>
      </MainSideNavMenuWrapper>
      <MainSideNavMenuWrapper
        onClick={() => {
          navigate("/diary-blog");
        }}
      >
        <DiaryContentsIcon />
        <MainSideNavMenuTitle>일기</MainSideNavMenuTitle>
      </MainSideNavMenuWrapper>
      <MainSideNavMenuWrapper
        onClick={() => {
          navigate("/keep-diary");
        }}
      >
        <KeepDiaryIcon />
        <MainSideNavMenuTitle>일기 쓰기</MainSideNavMenuTitle>
      </MainSideNavMenuWrapper>
      <MainSideNavMenuWrapper
        onClick={() => {
          navigate("/profile");
        }}
      >
        <ProfileIcon />
        <MainSideNavMenuTitle>프로필</MainSideNavMenuTitle>
      </MainSideNavMenuWrapper>
      <MainSideNavMenuWrapper>
        <MoreIcon />
        <MainSideNavMenuTitle>더 보기</MainSideNavMenuTitle>
      </MainSideNavMenuWrapper>
    </MainSideNavMenuList>
  );
};

export default NavMenuCp;

const MainSideNavMenuList = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-left: 50px;
  @media screen and (max-width: 1200px) {
    margin: 0;
  }
  @media screen and (max-width: 705px) {
    display: flex;
    justify-content: space-around;
    margin: 0;
  }
`;

const MainSideNavMenuWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 30px;
  width: 180px;
  padding: 10px;
  &:hover {
    background-color: #edebeb;
    border-radius: 12px;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  @media screen and (max-width: 705px) {
    margin: 0;
  }
`;

const MainSideNavMenuTitle = styled.div`
  margin-left: 15px;
  font-size: 14px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
