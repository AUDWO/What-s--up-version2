import styled from "styled-components";
import { CloseIcon } from "@components/icons/CloseIcon";

import ButtonCp from "@components/common/ButtonCp";
import MakePostProfileCp from "@components/modals/makePost/MakePostProfileCp";
import MakePostImgSelectorCp from "@components/modals/makePost/MakePostImgSelectorCp";
import MakePostSetUpCp from "@components/modals/makePost/MakePostSetUpCp";
import { useState, useRef } from "react";

import useModal from "@/customHooks/useModal";

const MakePostMd = () => {
  const modalBackgroundRef = useRef<HTMLDivElement>(null);
  const [mainContent, setMainContent] = useState("");
  const [subContent, setSubContent] = useState("");

  const { onClose } = useModal("makePostMd");
  return (
    <MakePostBackground
      ref={modalBackgroundRef}
      onClick={(e) => {
        if (e.target === modalBackgroundRef.current) {
          onClose();
        }
      }}
    >
      <MakePostContainer>
        <MakePostCloseIcon />
        <MakePostProfileCp />
        <MakePostImgSelectorCp />
        <PostMainContentWrapper>
          <PostMainContentInput placeholder="메인 컨텐츠 입력..." />
        </PostMainContentWrapper>
        <PostSubContentWrapper>
          <PostSubContentTextarea rows={1} placeholder="서브 컨텐츠 입력..." />
        </PostSubContentWrapper>
        <MakePostSetUpCp />
        <MakePostButtonWrapper>
          <ButtonCp>게시</ButtonCp>
          <ButtonCp backColor="#ed4956">삭제</ButtonCp>
        </MakePostButtonWrapper>
      </MakePostContainer>
    </MakePostBackground>
  );
};

export default MakePostMd;

const MakePostBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MakePostContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 10px;
  margin-right: 20px;
  margin-left: 20px;
  width: 400px;
  height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
  @media screen and (max-width: 501px) {
    margin-top: 50px;
  }
  @media screen and (max-width: 420px) {
  }
`;

const MakePostCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: -9%;
  font-size: 35px;
  @media screen and (max-width: 490px) {
    right: 0;
    top: -7%;
  }
`;

//------------PostContent--------------

const PostMainContentWrapper = styled.div`
  margin-top: 20px;
`;

const PostMainContentInput = styled.input`
  width: 100%;
  border: none;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  padding: 10px 20px 10px 20px;
  font-size: 16px;
  outline: none;
  &::placeholder {
    color: #b0b0b0;
  }
`;

const PostSubContentWrapper = styled.div``;

const PostSubContentTextarea = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ededed;
  padding: 10px 20px 10px 20px;
  font-size: 15px;
  outline: none;
  color: #b0b0b0;
  &::placeholder {
    color: #b0b0b0;
  }
`;

//------------PostButton-----------------

const MakePostButtonWrapper = styled.div`
  display: flex;
  algin-items: center;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 50px;
`;

//------------PostButton-----------------
