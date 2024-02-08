import styled from "styled-components";

const CommentContactCp = () => {
  return (
    <CommentContactWrapper>
      <CommentLikeText>좋요아요</CommentLikeText>
      <CommentLikeCountNumber>18</CommentLikeCountNumber>
      <ReplyCommentInputOpenButtom>답글 달기</ReplyCommentInputOpenButtom>
    </CommentContactWrapper>
  );
};

export default CommentContactCp;

const CommentContactWrapper = styled.div`
  display: flex;
  margin-top: 8px;
  align-items: center;
`;

const CommentLikeText = styled.div`
  font-size: 13px;
  color: #a4a4a4;
  margin-right: 2px;
`;

const CommentLikeCountNumber = styled.div`
  font-size: 13px;
  color: #a4a4a4;
  margin-right: 20px;
`;

const ReplyCommentInputOpenButtom = styled.button`
  font-size: 13px;
  color: #a4a4a4;
  border: none;
  background: none;
  cursor: pointer;
`;
