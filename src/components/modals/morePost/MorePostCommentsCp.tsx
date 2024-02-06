import CommentRCp from "@components/common/comment/CommentRCp";
import styled from "styled-components";

const MorePostCommentsCp = () => {
  return (
    <MorePostCommentsContainer>
      <CommentRCp />
      <CommentRCp />
      <CommentRCp />
      <CommentRCp />
      <CommentRCp />
    </MorePostCommentsContainer>
  );
};

export default MorePostCommentsCp;

const MorePostCommentsContainer = styled.div`
  align-items: center;
  padding-left: 20px;
  padding-bottom: 20px;
  overflow: auto;
  height: 360px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
