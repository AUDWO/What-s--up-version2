import styled from "styled-components";

const ProfileContentsCp = () => {
  return (
    <ProfileContentsContainer>
      <ProfileContentContainer>
        <ProfileContent>a</ProfileContent>
      </ProfileContentContainer>
      <ProfileContentContainer></ProfileContentContainer>
    </ProfileContentsContainer>
  );
};

export default ProfileContentsCp;

const ProfileContentsContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

const ProfileContentContainer = styled.div`
  background-color: orange;
  padding-bottom: 100%;
  position: relative;
`;

const ProfileContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
`;
