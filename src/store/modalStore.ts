import { atom } from "recoil";

const modalStore = atom({
  key: "modalStore",
  default: {
    postCommentMd: false,
    makePostMd: false,
    storyMakeMd: false,
    requestLoginMd: false,
  },
});

export default modalStore;
