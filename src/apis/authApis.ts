import {
  LoginCheck,
  NicknameCheck,
  SignInForm,
  SignInRes,
  SignUpForm,
  SignUpRes,
} from "@/types/authTypes";
import getData from "./httpMethods/getData";
import postData from "./httpMethods/postData";

export const getNicknameCheck = (nickname: string) =>
  getData<NicknameCheck>(`/auth/nickname-check/${nickname}`);

export const getEmailCheck = (email: string) =>
  getData<LoginCheck>(`/auth/email-check/${email}`);

export const getLogout = () => getData("/auth/logout");

export const postSignIn = (data: SignInForm) =>
  postData<SignInRes, SignInForm>("/auth/login", data);

export const postSignUp = (data: SignUpForm) =>
  postData<SignUpRes, SignUpForm>("/auth/sign-up", data);
