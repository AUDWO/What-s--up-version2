import styled from "styled-components";
import ButtonCp from "@components/common/ButtonCp";

const ProfileInfoCp = () => {
  return (
    <ProfileInfoContainer>
      <ProfileImgWrapper>
        <ProfileImg
          src={
            "https://i.pinimg.com/564x/93/b2/19/93b219cafc20b93743045ea518192238.jpg"
          }
        />
      </ProfileImgWrapper>
      <ProfileInfoWrapper>
        <ProfileInfoRealWrapper>
          <ProfileNameWrapper>
            <ProfileName>Peter_09</ProfileName>
            <ButtonCp backColor={"#4199ff"} fontSize={"15px"}>
              팔로우
            </ButtonCp>
          </ProfileNameWrapper>
          <ProfileRealName>peter</ProfileRealName>
          <ProfileIntroductionContainer>
            <ProfileIntroduction>
              Real Madrid.🤍 @AdidasFootball Athlete. Twitter: BellinghamJude
              Real Madrid.🤍 @AdidasFootball Athlete. Twitter: BellinghamJude
            </ProfileIntroduction>
          </ProfileIntroductionContainer>
          <Joined>Joined 2022-09-19</Joined>
          <FollowInfoWrapper>
            <FollowWrapper>
              <FollowTitle>팔로우</FollowTitle>
              <FollowrCountNumber>1299</FollowrCountNumber>
            </FollowWrapper>
            <FollowWrapper>
              <FollowTitle>팔로우</FollowTitle>
              <FollowrCountNumber>1299</FollowrCountNumber>
            </FollowWrapper>
          </FollowInfoWrapper>
        </ProfileInfoRealWrapper>
      </ProfileInfoWrapper>
    </ProfileInfoContainer>
  );
};

export default ProfileInfoCp;

const ProfileInfoContainer = styled.div`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #dbdbdb;
  background-color: white;
  padding-right: 60px;
  display: flex;
  @media screen and (max-width: 846px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  @media screen and (max-width: 705px) {
  }
`;

const ProfileImgWrapper = styled.div`
  width: 170px;
  height: 170px;
  margin-top: 30px;
  margin-left: 30px;
  @media screen and (max-width: 846px) {
    width: 460px;
    margin-left: 0;
  }
  @media screen and (max-width: 464px) {
    height: 110px;
    width: 100%;
  }
`;

const ProfileImg = styled.img`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  @media screen and (max-width: 846px) {
    width: 130px;
    height: 130px;
  }
  @media screen and (max-width: 464px) {
    width: 100px;
    height: 100px;
  }
`;

const ProfileInfoWrapper = styled.div`
  width: 80%;
  height: 300px;
  padding-left: 80px;
  @media screen and (max-width: 846px) {
    width: 460px;
    padding: 0;
  }
  @media screen and (max-width: 464px) {
    width: 100%;
  }
`;
//--------------profileContent-----------------
const ProfileInfoRealWrapper = styled.div`
  width: 460px;
  height: 100%;
  @media screen and (max-width: 464px) {
    width: 100%;
  }
`;

const ProfileNameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FollowButton = styled.button`
  border: none;
  background-color: #4199ff;
  border-radius: 5px;
  font-size: 15px;
  color: white;
  padding: 8px 15px 8px 15px;
`;

const ProfileName = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-right: 50px;
`;

const ProfileIntroductionContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const ProfileIntroduction = styled.div`
  line-height: 150%;
`;

const ProfileRealName = styled.div`
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 17px;
`;

const Joined = styled.div`
  margin-bottom: 20px;
`;

const FollowInfoWrapper = styled.div`
  display: flex;
`;
const FollowWrapper = styled.div`
  display: flex;
  margin-right: 30px;
`;
const FollowTitle = styled.div`
  margin-right: 5px;
`;

const FollowrCountNumber = styled.div`
  font-weight: 600;
`;
