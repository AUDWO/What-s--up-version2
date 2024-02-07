import styled from "styled-components";
import PostCp from "./PostCp";

const PostContentsRCp = () => {
  return (
    <PostsContainer>
      <PostCp />
      <PostCp />
      <PostCp />
    </PostsContainer>
  );
};

export default PostContentsRCp;
const PostsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
