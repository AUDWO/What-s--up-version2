import { Diary, DiaryContact } from "@/types/contentTypes";
import getData from "../httpMethods/getData";

export const getAllDiary = () => getData<Diary[]>("/get/all-diary");

export const getUserAllDiary = (userId: number) =>
  getData<Diary[]>(`/get/user-all-diary/${userId}`);

export const getOnlyDiary = (diaryId: number) =>
  getData<Diary>(`/get/only-diary/${diaryId}`);

export const getDiaryContactInfo = (diaryId: number) => {
  getData<DiaryContact>(`/get/diary/contact-info/${diaryId}`);
};
