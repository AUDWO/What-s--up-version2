import styled from "styled-components";

const MorePostProfileCp = () => {
  return (
    <MorePostProfileContainer>
      <MorePostProfileWrapper>
        <MoreProfileImg />
        <MoreProfileName>Liverpool</MoreProfileName>
      </MorePostProfileWrapper>
    </MorePostProfileContainer>
  );
};

export default MorePostProfileCp;

const MorePostProfileContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #e7e7e6;

  align-items: center;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const MoreProfileImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: black;
  margin-right: 10px;
`;

const MorePostProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MoreProfileName = styled.div`
  font-weight: 500;
`;
