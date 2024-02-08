import styled from "styled-components";

const NavTitleCp = () => {
  return (
    <MainTitleWrapper>
      <MainTilteLetter>W</MainTilteLetter>
      <MainTilteLetter>H</MainTilteLetter>
      <MainTilteLetter>A</MainTilteLetter>
      <MainTilteLetter>T</MainTilteLetter>
      <MainTilteLetter2>'</MainTilteLetter2>
      <MainTilteLetter>S</MainTilteLetter>
      <MainTilteSpaceLetter></MainTilteSpaceLetter>
      <MainTilteLetter>U</MainTilteLetter>
      <MainTilteLetter>P</MainTilteLetter>
    </MainTitleWrapper>
  );
};

export default NavTitleCp;
const MainTitleWrapper = styled.div`
  display: flex;
  margin-left: 50px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const MainTilteLetter = styled.div`
  font-family: Orbitron;
  font-size: 28px;
  color: #f7dd07;
`;

const MainTilteLetter2 = styled.div`
  font-family: Orbitron;
  font-size: 28px;
  color: #4099ff;
`;
const MainTilteSpaceLetter = styled.div`
  width: 10px;
`;
