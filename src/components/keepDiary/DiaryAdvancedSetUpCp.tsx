import styled from "styled-components";

const DiaryAdvancedSetUpCp = () => {
  return (
    <DiaryPublicDetailsContainer>
      <DiaryPublicSelectWrapper>
        <DiaryPublicSelectText>일기 공개</DiaryPublicSelectText>
      </DiaryPublicSelectWrapper>
      <DiaryPublicDetailsTogglesWrapper>
        <DiaryPublicDetailsToggleWrapper>
          <DiaryPublicDetailsText>댓글 기능 해제</DiaryPublicDetailsText>
          <DiaryPublicDetailsToggleButton></DiaryPublicDetailsToggleButton>
        </DiaryPublicDetailsToggleWrapper>
        <DiaryPublicDetailsToggleWrapper>
          <DiaryPublicDetailsText>좋아요 기능 해제</DiaryPublicDetailsText>
          <DiaryPublicDetailsToggleButton></DiaryPublicDetailsToggleButton>
        </DiaryPublicDetailsToggleWrapper>
      </DiaryPublicDetailsTogglesWrapper>
    </DiaryPublicDetailsContainer>
  );
};

export default DiaryAdvancedSetUpCp;

const DiaryPublicSelectWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const DiaryPublicSelectText = styled.div`
  color: #acacac;
`;

const DiaryPublicDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 985px) {
    height: 300px;
  }
`;

const DiaryPublicDetailsTogglesWrapper = styled.div`
  width: 270px;
  height: 160px;
  border: 4px solid #4199ff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;
  @media screen and (max-width: 985px) {
    width: 240px;
    margin-top: 10px;
  }
`;

const DiaryPublicDetailsToggleWrapper = styled.div`
  display: flex;
`;
const DiaryPublicDetailsText = styled.div`
  color: #acacac;
`;

const DiaryPublicDetailsToggleButton = styled.div``;
