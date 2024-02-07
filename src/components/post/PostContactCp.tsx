import styled from "styled-components";
import {
  PostLikeIcon,
  PostCommentIcon,
} from "@components/icons/PostContactIcons";

const PostContactCp = () => {
  return (
    <PostContactContainer>
      <PostContactWrapper>
        <PostLikeIcon />
        <PostContactCountNumber>2</PostContactCountNumber>
      </PostContactWrapper>
      <PostContactWrapper>
        <PostCommentIcon />
        <PostContactCountNumber>2</PostContactCountNumber>
      </PostContactWrapper>
    </PostContactContainer>
  );
};

export default PostContactCp;
const PostContactContainer = styled.div`
  width: 70px;
  height: 100%;
  @media screen and (max-width: 501px) {
    display: none;
  }
`;

const PostContactWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-left: 10px;
  @media screen and (max-width: 501px) {
    margin-top: 0;
    margin-right: 10px;
  }
`;

const PostContactCountNumber = styled.div`
  font-size: 14px;
`;
