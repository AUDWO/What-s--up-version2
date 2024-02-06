import styled from "styled-components";
import StoryCp from "./StoryCp";
const StoryContentsRCp = () => {
  return (
    <StoryContainer>
      <StoryCp />
      <StoryCp />
      <StoryCp />
      <StoryCp />
      <StoryCp />
      <StoryCp />
      <StoryCp />
    </StoryContainer>
  );
};

export default StoryContentsRCp;

const StoryContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  @media screen and (max-width: 501px) {
    margin-top: 50px;
  }
`;
