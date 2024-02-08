import React from "react";
import styled from "styled-components";

interface ButtonCpPropsType {
  fontSize?: string;
  children: string;
  backColor?: string;
}

const ButtonCp = ({ fontSize, children, backColor }: ButtonCpPropsType) => {
  return (
    <Button backColor={backColor} fontSize={fontSize}>
      {children}
    </Button>
  );
};

export default ButtonCp;

const Button = styled.button<{ fontSize?: string; backColor?: string }>`
  cursor: pointer;
  border: none;
  border-radius: 7px;
  color: white;
  padding: 8px 15px 8px 15px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  background-color: ${(props) =>
    props.backColor ? props.backColor : "#4199ff"};
`;
