import styled from "styled-components";

const CheckUserProfileCp = () => {
  return (
    <CheckUserProfileContainer>
      <CheckUserProfileImg />
      <CheckUserProfileName>peter</CheckUserProfileName>
    </CheckUserProfileContainer>
  );
};

export default CheckUserProfileCp;

const CheckUserProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CheckUserProfileImg = styled.img`
  width: 40px;
  height: 40px;
  background-color: black;
  border-radius: 50%;
`;

const CheckUserProfileName = styled.div`
  margin-left: 20px;
  font-size: 18px;
  font-weight: 900;
`;
