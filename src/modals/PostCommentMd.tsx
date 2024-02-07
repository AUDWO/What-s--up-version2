import styled from "styled-components";

import MorePostProfileCp from "@components/modals/morePost/MorePostProfileCp";
import MorePostContentCp from "@components/modals/morePost/MorePostContentCp";
import MorePostCommentsCp from "@components/modals/morePost/MorePostCommentsCp";
import MorePostCommentInputCp from "@components/modals/morePost/MorePostCommentInputCp";

const PostCommentMd = () => {
  return (
    <MorePostBackground>
      <MorePostContainer>
        <MorePostImg
          src={
            "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
          }
        />
        <MorePostInfoContainer>
          <MorePostProfileCp />
          <MorePostContentCp />
          <MorePostCommentsCp />
          <MorePostCommentInputCp />
        </MorePostInfoContainer>
      </MorePostContainer>
    </MorePostBackground>
  );
};

export default PostCommentMd;

const MorePostBackground = styled.div`
  position: fixed;
  border: 2px solid red;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 801px) {
    display: none;
  }
`;

const MorePostContainer = styled.div`
  width: 800px;
  height: 580px;
  position: absolute;
  z-index: 999;
  background-color: white;
  opacity: 1;
  display: flex;
  position: relative;
  border-radius: 5px;
`;

const MorePostImg = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px 0px 0px 5px;
`;

const MorePostInfoContainer = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;
