import styled from "styled-components";

const CheckUserContentsInfoCp = () => {
  return (
    <CheckUserContentContainer>
      <ContentsCountWrapper>
        <PostCountTitle>게시물</PostCountTitle>
        <PostCountNumber>0</PostCountNumber>
      </ContentsCountWrapper>
      <ContentsCountWrapper>
        <DiaryCountTitle>일기 -</DiaryCountTitle>
        <DiaryCountNumber>0</DiaryCountNumber>
      </ContentsCountWrapper>
    </CheckUserContentContainer>
  );
};

export default CheckUserContentsInfoCp;

const CheckUserContentContainer = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  padding-left: 5px;
`;

const ContentsCountWrapper = styled.div`
  display: flex;
  margin-right: 40px;
`;

const PostCountTitle = styled.div`
  margin-right: 7px;
`;

const PostCountNumber = styled.div``;

const DiaryCountTitle = styled.div`
  margin-right: 7px;
`;

const DiaryCountNumber = styled.div``;
