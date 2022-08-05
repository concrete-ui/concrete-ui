import { ButtonStyled } from './Button';
import { Component, JSX } from 'solid-js';
import { styled } from 'solid-styled-components';

interface ButtonGroupProps {
  children: JSX.ArrayElement;
}

export const ButtonGroupStyled = styled("div")`
  display: flex;
  // Not working
  ${ButtonStyled.class} {
    background: "red";
  }
`;

export const ButtonGroup: Component<ButtonGroupProps> = (props) => {
  return <ButtonGroupStyled>{props.children}</ButtonGroupStyled>;
};
