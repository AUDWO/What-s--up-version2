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
import { useRecoilState } from "recoil";
import dependedModalOpenState from "@/store/dependedModalOpenState";

import {
  MainSideNavMenuContainer,
  MainSideNavMenuList,
  MainSideNavMenuTitle,
  MainSideNavMenuWrapper,
} from "@/styledComponents/mainSideNav/NavMenuCpStyle";
import SeeMorePopUp from "@/popUp/SeeMorePopUp";
import { MutableRefObject, forwardRef } from "react";
import setScrollTopToLs from "@/utils/setScrollTopSaveLs";

const NavMenuCp = forwardRef<HTMLDivElement>((props, ref) => {
  const navigate = useNavigate();

  const { onOpen: makePostMdOpen } = useModal("makePostMd");

  const [searchModalOpenState, setSearchModalOpenState] = useRecoilState(
    dependedModalOpenState("searchMd")
  );

  const [seeMoreModalOpenState, setSeeMoreModalOpenState] = useRecoilState(
    dependedModalOpenState("seeMorePu")
  );

  const navMenuItems = [
    { icon: <HomeIcon />, title: "홈", onClick: () => navigate("/") },
    {
      icon: <SearchIcon />,
      title: "검색",
      onClick: (e: React.MouseEvent) => {
        e.stopPropagation();
        setSearchModalOpenState(!searchModalOpenState);
      },
    },
    { icon: <MakePostIcon />, title: "만들기", onClick: makePostMdOpen },
    {
      icon: <DiaryContentsIcon />,
      title: "일기",
      onClick: () => {
        setScrollTopToLs(
          "scrollTop",
          String((ref as MutableRefObject<HTMLDivElement>).current.scrollTop)
        );
        navigate("/diary-blog");
      },
    },
    {
      icon: <KeepDiaryIcon />,
      title: "일기 쓰기",
      onClick: () => {
        setScrollTopToLs(
          "scrollTop",
          String((ref as MutableRefObject<HTMLDivElement>).current.scrollTop)
        );
        navigate("/keep-diary");
      },
    },
    {
      icon: <ProfileIcon />,
      title: "프로필",
      onClick: () => {
        setScrollTopToLs(
          "scrollTop",
          String((ref as MutableRefObject<HTMLDivElement>).current.scrollTop)
        );
        navigate("/profile");
      },
    },
    {
      icon: <MoreIcon />,
      title: "더 보기",
      onClick: (e: React.MouseEvent) => {
        e.stopPropagation();
        setSeeMoreModalOpenState(!seeMoreModalOpenState);
      },
      children: seeMoreModalOpenState && <SeeMorePopUp />,
    },
  ];

  return (
    <MainSideNavMenuList searchMdOpen={searchModalOpenState}>
      {navMenuItems.map((item, index) => (
        <MainSideNavMenuContainer searchMdOpen={searchModalOpenState}>
          {item.children ? item.children : ""}
          <MainSideNavMenuWrapper
            key={index}
            onClick={item.onClick}
            searchMdOpen={searchModalOpenState}
          >
            {item.icon}
            <MainSideNavMenuTitle searchMdOpen={searchModalOpenState}>
              {item.title}
            </MainSideNavMenuTitle>
          </MainSideNavMenuWrapper>
        </MainSideNavMenuContainer>
      ))}
    </MainSideNavMenuList>
  );
});

export default NavMenuCp;
/*
const MainSideNavMenuList = styled.div`
  width: 80%;
  margin-top: 50px;
  margin-left: 50px;
  background-color: ${(props) => props.theme.bgColor};
  @media screen and (max-width: 1200px) {
    margin: 0;
  }
  @media screen and (max-width: 705px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 0;
  }
`;

const MainSideNavMenuWrapper = styled.div<{ position?: string }>`
  position: ${(props) => (props.position ? props.position : "")};
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 30px;
  width: 180px;
  padding: 10px;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
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

const MainSideNavMenuTitle = styled.div<{ OpenState: boolean }>`
  margin-left: 15px;
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};
  display: ${(props) => (props.OpenState ? "none" : "block")};
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;*/

/*
  <MainSideNavMenuWrapper
        onClick={() => {
          navigate("/");
        }}
      >
<HomeIcon />
        <MainSideNavMenuTitle OpenState={searchModalOpenState}>
          홈
        </MainSideNavMenuTitle>
      </MainSideNavMenuWrapper>
      <MainSideNavMenuWrapper
        position="relative"
        onClick={(e) => {
          e.stopPropagation();
          setSearchModalOpenState(true);
        }}
      >
        <SearchIcon onClick={searchMdOpen} />
        <MainSideNavMenuTitle OpenState={searchModalOpenState}>
          검색
        </MainSideNavMenuTitle>
      </MainSideNavMenuWrapper>
      <MainSideNavMenuWrapper onClick={makePostMdOpen}>
        <MakePostIcon />
        <MainSideNavMenuTitle OpenState={searchModalOpenState}>
          만들기
        </MainSideNavMenuTitle>
      </MainSideNavMenuWrapper>
      <MainSideNavMenuWrapper
        onClick={() => {
          navigate("/diary-blog");
        }}
      >
        <DiaryContentsIcon />
        <MainSideNavMenuTitle OpenState={searchModalOpenState}>
          일기
        </MainSideNavMenuTitle>
      </MainSideNavMenuWrapper>
      <MainSideNavMenuWrapper
        onClick={() => {
          navigate("/keep-diary");
        }}
      >
        <KeepDiaryIcon />
        <MainSideNavMenuTitle OpenState={searchModalOpenState}>
          일기 쓰기
        </MainSideNavMenuTitle>
      </MainSideNavMenuWrapper>
      <MainSideNavMenuWrapper
        onClick={() => {
          navigate("/profile");
        }}
      >
        <ProfileIcon />
        <MainSideNavMenuTitle OpenState={searchModalOpenState}>
          프로필
        </MainSideNavMenuTitle>
      </MainSideNavMenuWrapper>
      <MainSideNavMenuWrapper>
        <MoreIcon />
        <MainSideNavMenuTitle OpenState={searchModalOpenState}>
          더 보기
        </MainSideNavMenuTitle>
      </MainSideNavMenuWrapper>


*/
