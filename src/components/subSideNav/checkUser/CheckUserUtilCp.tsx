import styled from "styled-components";
import { SettingIcon, LogoutIcon } from "@components/icons/CheckUserUtilIcons";

const CheckUserUtilCp = () => {
  return (
    <CheckUserContentContainer>
      <CheckUserProfiletSettingWrapper>
        <SettingIcon />
        <SettingTitle>프로필 설정</SettingTitle>
      </CheckUserProfiletSettingWrapper>
      <LogoutWrapper>
        <LogoutIcon />
        <LogoutTitle>로그아웃</LogoutTitle>
      </LogoutWrapper>
    </CheckUserContentContainer>
  );
};

export default CheckUserUtilCp;

const CheckUserContentContainer = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

const SettingTitle = styled.div`
  color: #bcb8b8;
`;

const CheckUserProfiletSettingWrapper = styled.div`
  display: flex;
  margin-right: 10px;
`;

const LogoutWrapper = styled.div`
  display: flex;
`;

const LogoutTitle = styled.div`
  color: #bcb8b8;
`;
