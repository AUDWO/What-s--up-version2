import styled from "styled-components";
import CommentProfileCp from "./CommentProfileCp";
import CommentContentCp from "./CommentContentCp";
import CommentLikeCp from "./CommentLikeCp";

const CommentRCp = () => {
  return (
    <CommentContainer>
      <CommentProfileCp />
      <CommentContentCp />
      <CommentLikeCp />
    </CommentContainer>
  );
};

export default CommentRCp;

const CommentContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
`;
