import { useState, useRef, useEffect, ChangeEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";

import userSignInfo from "@/store/userSignInfo";
import checkUserInfoForm from "@/utils/sign/checkUserInfoForm";

import { LoginCheck } from "@/types/authTypes";
import { getEmailCheck } from "@/apis/authApis";

import {
  Label,
  Input,
  CheckUserIcon,
  Satisfied,
  SatisfiedIcon,
  Requests,
} from "@/styledComponents/sign/signStyles";

const EmailInput = () => {
  const [userSignState, setUserSignState] = useRecoilState(userSignInfo);
  const [prevEmailChecking, setPrevEmailChecking] = useState(false);
  const [emailInputIsFocused, setEmailInputIsFocused] = useState(false);
  const [emailPassChecking, setEmailPassChecking] = useState(false);

  const { data: emailOverlapCheck } = useQuery<LoginCheck>({
    queryKey: ["emailOverlapCheck", userSignState.email],
    queryFn: () => getEmailCheck(userSignState.email),
    enabled: prevEmailChecking,
  });

  const handleEmailValidationCheck = () => {
    if (checkUserInfoForm("email", userSignState.email) && emailOverlapCheck) {
      setEmailPassChecking(true);
    } else {
      setEmailPassChecking(false);
    }
    setPrevEmailChecking(true);
    setUserSignState((prev) => ({ ...prev, emailPassChecking: true }));
  };

  const handleResetPassEmailChecking = (e: ChangeEvent<HTMLInputElement>) => {
    setUserSignState({ ...userSignState, email: e.target.value });
    setEmailPassChecking(false);
  };

  const emailRequestMessage = emailPassChecking ? (
    <Satisfied>사용 가능한 이메일 입니다!</Satisfied>
  ) : (
    <Requests>사용 불가능한 이메일 입니다!</Requests>
  );

  const handleBlur = () => {
    setEmailInputIsFocused(false);
    setPrevEmailChecking(false);
  };

  const handleFocus = () => {
    setEmailInputIsFocused(true);
  };

  return (
    <Label>
      email
      <Input
        placeholder="이메일"
        type="email"
        value={userSignState.email}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => {
          handleResetPassEmailChecking(e);
        }}
      />
      {emailPassChecking ? (
        <SatisfiedIcon />
      ) : (
        <CheckUserIcon onClick={handleEmailValidationCheck} />
      )}
      {emailInputIsFocused && !emailPassChecking && (
        <Requests>사용 가능한 이메일인지 확인해주세요!</Requests>
      )}
      {!emailInputIsFocused && prevEmailChecking && emailRequestMessage}
    </Label>
  );
};

export default EmailInput;
