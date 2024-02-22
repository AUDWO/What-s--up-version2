import { useRecoilState } from "recoil";
import userSignInfo from "@/store/userSignInfo";
import { ChangeEvent, useState } from "react";
import checkUserInfoForm from "@/utils/sign/checkUserInfoForm";
import { useQuery } from "@tanstack/react-query";
import { getNicknameCheck } from "@/apis/authApis";

import {
  Label,
  Input,
  CheckUserIcon,
  Requests,
  Satisfied,
  SatisfiedIcon,
} from "@/styledComponents/sign/signStyles";
const NicknameInput = () => {
  const [userSignState, setUserSignState] = useRecoilState(userSignInfo);
  const [prevNicknameChecking, setPrevNicknameChecking] = useState(false);
  const [nicknameInputIsFocused, setNicknameInputIsFocused] = useState(false);
  const [nicknamePassChecking, setNickNamePassChecking] = useState(false);

  const { data: nicknameCheck } = useQuery({
    queryKey: ["nicknameCheck", userSignState.nickname],
    queryFn: () => getNicknameCheck(userSignState.nickname),
    enabled: prevNicknameChecking,
  });

  const handleNicknameValidationCheck = () => {
    if (
      checkUserInfoForm("nickname", userSignState.nickname) &&
      nicknameCheck
    ) {
      setNickNamePassChecking(true);
    } else {
      setNickNamePassChecking(false);
    }
    setPrevNicknameChecking(true);
  };

  const handleResetNicknameChecking = (e: ChangeEvent<HTMLInputElement>) => {
    setUserSignState({ ...userSignState, nickname: e.target.value });
    setNickNamePassChecking(false);
  };

  const nicknameRequestMessage = nicknamePassChecking ? (
    <Satisfied>사용 가능한 닉네임 입니다!</Satisfied>
  ) : (
    <Requests>사용 불가능한 닉네임 입니다!</Requests>
  );

  const handleFocus = () => {
    setNicknameInputIsFocused(true);
  };

  const handleBlur = () => {
    setNicknameInputIsFocused(false);
    setPrevNicknameChecking(false);
  };

  return (
    <Label>
      nickName
      <Input
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="닉네임"
        type="text"
        value={userSignState.nickname}
        onChange={(e) => {
          handleResetNicknameChecking(e);
        }}
      />
      {nicknamePassChecking ? (
        <SatisfiedIcon />
      ) : (
        <CheckUserIcon onClick={handleNicknameValidationCheck} />
      )}
      {!prevNicknameChecking && nicknameInputIsFocused && (
        <Requests>사용 가능한 닉네임인지 확인해주세요!(최대 15자)</Requests>
      )}
      {prevNicknameChecking &&
        !nicknameInputIsFocused &&
        nicknameRequestMessage}
    </Label>
  );
};

export default NicknameInput;
