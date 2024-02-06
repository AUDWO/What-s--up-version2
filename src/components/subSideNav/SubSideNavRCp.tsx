import styled from "styled-components";
import RecommendUsersRCp from "./Recommend/RecommendUsersRCp";
import CheckUserRCp from "./CheckUser/CheckUserRCp";

const SubSideNavRCp = () => {
  return (
    <SubSideNavContainer>
      <CheckUserRCp />
      <RecommendUsersRCp />
    </SubSideNavContainer>
  );
};

export default SubSideNavRCp;

const SubSideNavContainer = styled.nav`
  width: 320px;
  height: 100vh;
  position: absolute;
  right: 0;
  padding-left: 20px;
  @media screen and (max-width: 1019px) {
    display: none;
  }
`;
