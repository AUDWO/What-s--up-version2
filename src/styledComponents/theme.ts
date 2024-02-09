import styled from "styled-components";

const color = {
  main: "#f7dd07",
  sub: "#4199ff",
  border: "#dbdbdb",
  mainGrayfont: "#acacac",
  explainFontColor: " #b0b0b0",
};

const lightTheme = {
  bgColor: "#ffffff",
  fontColor: "black",
  color,
};

const darkTheme = {
  bgColor: "#000000",
  fontColor: "white",
  color,
  borderColor: "#262626",
};

const theme = {
  darkTheme,
  lightTheme,
};

export default theme;
