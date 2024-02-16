import styled from "styled-components";
import ButtonCp from "@components/common/ButtonCp";
import { CloseIcon } from "@components/icons/CloseIcon";
import useModal from "@/customHooks/useModal";
import { useRef } from "react";
const MakeStoryMd = () => {
  const { onClose } = useModal("makeStoryMd");
  const makeStoryBackgroundRef = useRef(null);

  return (
    <MakeStoryBackground
      ref={makeStoryBackgroundRef}
      onClick={(e) => {
        if (e.target === makeStoryBackgroundRef.current) {
          onClose();
        }
      }}
    >
      <MakeStoryModalContainer>
        <MakeStoryCloseIcon
          onClick={() => {
            onClose();
          }}
        />
        <StoryProfileWrapperV2>
          <StoryProfileImg />
          <StoryProfileNameWapper>
            <StoryProfileName>Peter_09</StoryProfileName>
            <MakeStoryText>Make a story</MakeStoryText>
          </StoryProfileNameWapper>
        </StoryProfileWrapperV2>
        <MakeStoryImgWrapper>
          <StoryImgSelectWrapper>
            <StoryImgSelectText>사진을 선택해주세요.</StoryImgSelectText>
            <ButtonCp>사진 선택</ButtonCp>
          </StoryImgSelectWrapper>
        </MakeStoryImgWrapper>
        <StoryContentWrapper>
          <StoryProfileWrapper>
            <StoryProfileImg />
            <StoryProfileNameWapper>
              <StoryProfileName>Peter_09</StoryProfileName>
              <MakeStoryText>Make a story</MakeStoryText>
            </StoryProfileNameWapper>
          </StoryProfileWrapper>
          <StoryContentTextareaWrapper>
            <StoryContentTextarea placeholder="내용을 작성해주세요" />
          </StoryContentTextareaWrapper>
          <MakeStoryButtonWrapper>
            <ButtonCp>게시하기</ButtonCp>
            <ButtonCp>삭제하기</ButtonCp>
          </MakeStoryButtonWrapper>
        </StoryContentWrapper>
      </MakeStoryModalContainer>
    </MakeStoryBackground>
  );
};

export default MakeStoryMd;

const StoryProfileWrapperV2 = styled.div`
  width: 100%;
  height: 80px;
  display: none;
  padding-left: 20px;
  @media screen and (max-width: 900px) {
    display: block;
    display: flex;
    align-items: center;
  }
  border-bottom: 1px solid ${(props) => props.theme.subBorderColor};
  border-radius: 7px 7px 0px 0px;
`;

const MakeStoryBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 99999999999999999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MakeStoryModalContainer = styled.div`
  width: 700px;
  height: 450px;
  background-color: ${(props) => props.theme.subBgColor};
  border-radius: 7px;
  display: flex;
  position: relative;
  overflow-y: scroll;
  overflow-x: hidden;
  @media screen and (max-width: 900px) {
    width: 350px;
    height: 80%;
    display: block;
  }
`;

const MakeStoryImgWrapper = styled.div`
  width: 350px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${(props) => props.theme.subBorderColor};
`;
const MakeStoryCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: -5%;
  top: -7%;
  font-size: 30px;
  @media screen and (max-width: 900px) {
    right: 0;
  }
`;
const StoryImg = styled.img``;
const StoryImgSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StoryImgSelectText = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  color: ${(props) => props.theme.fontColor};
`;

//-------------------Story Profile------------------------

const StoryProfileWrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 20px;
  display: flex;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const StoryProfileImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: black;
`;

const StoryProfileNameWapper = styled.div`
  margin-left: 10px;
  padding-top: 5px;
`;
const MakeStoryText = styled.div`
  font-size: 14px;
  color: #b0b0b0;
`;

const StoryProfileName = styled.div`
  margin-bottom: 5px;
  font-weight: 600;
  color: ${(props) => props.theme.fontColor};
`;

//-------------------Story Profile------------------------

//-------------------Story Content-------------------------

const StoryContentWrapper = styled.div`
  width: 350px;
  height: 450px;
`;

const StoryContentTextareaWrapper = styled.div`
  height: 250px;
`;

const StoryContentTextarea = styled.textarea`
  resize: none;
  outline: none;
  border: none;
  width: 100%;
  height: 250px;
  font-size: 16px;
  padding: 20px;
  box-sizing: border-box;
  border-top: 1px solid ${(props) => props.theme.subBorderColor};
  border-bottom: 1px solid ${(props) => props.theme.subBorderColor};
  background-color: ${(props) => props.theme.subBgColor};
  color: ${(props) => props.theme.fontColor};
`;

//-------------------Story Content-------------------------

//---------------------Story Button

const MakeStoryButtonWrapper = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  @media screen and (max-width: 900px) {
  }
`;
