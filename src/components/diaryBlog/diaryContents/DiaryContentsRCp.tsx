import styled from "styled-components";
import DiaryCp from "./DiaryCp";

const DiaryContentsRCp = () => {
  return (
    <DiaryContentsContainer>
      <DiaryCp />
      <DiaryCp />
      <DiaryCp />
      <DiaryCp />
      <DiaryCp />
    </DiaryContentsContainer>
  );
};

export default DiaryContentsRCp;

const DiaryContentsContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  @media screen and (max-width: 770px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
  grid-gap: 30px;
`;
