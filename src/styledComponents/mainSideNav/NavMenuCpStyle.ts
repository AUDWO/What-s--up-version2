import styled, { css } from "styled-components";

const mainSideNavMenuMiniVersion1200 = `@media screen and (max-width:1200px)`;
const mainNavMenuDownVersion705 = `@media screen and (max-width:705px)`;

const mainSideNavMenuListMiniVersion = css`
  margin: 0;
`;

const MainSideNavMenuWrapperMiniVersion = css`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const MainSideNavMenuList = styled.div<{ searchMdOpen: boolean }>`
  width: 80%;
  margin-top: 50px;
  margin-left: 50px;
  background-color: ${(props) => props.theme.bgColor};
  ${(props) => props.searchMdOpen && mainSideNavMenuListMiniVersion};
  ${mainSideNavMenuMiniVersion1200} {
    ${mainSideNavMenuListMiniVersion}
  }
  ${mainNavMenuDownVersion705} {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 0;
  }
`;

export const MainSideNavMenuWrapper = styled.div<{
  position?: string;
  searchMdOpen: boolean;
}>`
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
  ${(props) => (props.searchMdOpen ? "" : "")};
  ${mainSideNavMenuMiniVersion1200} {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  ${mainNavMenuDownVersion705} {
    margin: 0;
  }
`;

export const MainSideNavMenuTitle = styled.div<{ OpenState: boolean }>`
  margin-left: 15px;
  font-size: 14px;
  color: ${(props) => props.theme.fontColor};
  display: ${(props) => (props.OpenState ? "none" : "block")};
  ${mainSideNavMenuMiniVersion1200} {
    display: none;
  }
`;
