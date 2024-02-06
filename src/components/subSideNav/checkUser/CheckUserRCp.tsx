import styled from "styled-components";
import CheckUserContentsInfoCp from "./CheckUserContentsInfoCp";
import CheckUserUtilCp from "./CheckUserUtilCp";
import CheckUserProfileCp from "./CheckUserProfileCp";

const CheckUserRCp = () => {
  return (
    <CheckUserContainer>
      <CheckUserProfileCp />
      <CheckUserContentsInfoCp />
      <CheckUserUtilCp />
    </CheckUserContainer>
  );
};

export default CheckUserRCp;

const CheckUserContainer = styled.div`
  width: 280px;
  height: 200px;
  border-radius: 10px;
  padding-top: 10px;

  margin-top: 30px;
  margin-bottom: 70px;
`;
