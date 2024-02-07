import styled from "styled-components";
import PostContactV2Cp from "./PostContactV2CP";
const PostContentInfoCp = () => {
  return (
    <PostContentInfoContainer>
      <PostImg
        src={
          "https://m.media-amazon.com/images/I/81FECvP07oL._AC_UF1000,1000_QL80_.jpg"
        }
      />
      <PostContactV2Cp />
      <PostContentWrapper>
        <PostContentProfileName>myeon+jae</PostContentProfileName>
        <PostContent>wd d wd d w w w </PostContent>
      </PostContentWrapper>
    </PostContentInfoContainer>
  );
};

export default PostContentInfoCp;

const PostImg = styled.img`
  width: 100%;
  height: 570px;
  border-radius: 8px 8px 0px 0px;
  @media screen and (max-width: 501px) {
    width: 420px;
    height: 570px;
  }
  object-fit: cover;
  @media screen and (max-width: 421px) {
    width: 100%;
    height: 81%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const PostContentInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 501px) {
    width: 100%;
  }
  @media screen and (max-width: 421px) {
    width: 100%;
    position: relative;
    padding-bottom: 166.1%;
  }
`;

const PostContentWrapper = styled.div`
  width: 100%;
  height: 50px;

  background-color: white;
  border: 3px solid #f7dd07;
  display: flex;
  algin-items: center;

  @media screen and (max-width: 501px) {
    width: 420px;
    border-top: none;
  }
  @media screen and (max-width: 421px) {
    width: 100%;
    height: 9.5%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

const PostContentProfileName = styled.div`
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 16px;
  margin-right: 10px;
  margin-left: 10px;
`;
const PostContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;
