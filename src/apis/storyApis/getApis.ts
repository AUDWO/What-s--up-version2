import { Story } from "@/types/contentTypes";
import getData from "../httpMethods/getData";

export const getAllStory = () => getData(`/get/all-story`);

export const getOnlyStory = (storyId: number) =>
  getData<Story>(`/get/only-story/${storyId}`);

export const getStoryContactInfo = (storyId: number) => {
  getData(`/get/story/contact-info/${storyId}`);
};
