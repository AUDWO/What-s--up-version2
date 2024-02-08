import styled from "styled-components";
import MainIcon from "@components/icons/MainIcon";
import NavTitleCp from "./NavTitleCp";
import NavMenuCp from "./NavMenuCp";

const MainSideNavCp = () => {
  return (
    <MainSideNav>
      <MainSideNavContent>
        <MainIconWrapper>
          <MainIcon />
        </MainIconWrapper>
        <NavTitleCp />
        <NavMenuCp />
      </MainSideNavContent>
    </MainSideNav>
  );
};

export default MainSideNavCp;

const MainSideNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  width: 270px;
  height: 100vh;
  position: fixed;
  left: 0;
  z-index: 999;
  border-right: 1px solid #e9e9e9;

  @media screen and (max-width: 1200px) {
    width: 100px;
  }

  @media screen and (max-width: 705px) {
    left: 50%;
    bottom: 0%;
    transform: translate(-50%);
    width: 100vw;
    height: 50px;
    display: block;
  }
`;
const MainSideNavContent = styled.div`
  width: 270px;
  @media screen and (max-width: 1200px) {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 705px) {
    flex-direction: row;
    bottom: 0%;
    width: 100vw;
    height: 100%;
    background-color: white;
  }
`;

const MainIconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 705px) {
    display: none;
  }
  margin-top: 40px;
  margin-bottom: 30px;
`;
