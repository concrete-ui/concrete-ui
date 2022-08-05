import { buttonStyles } from './Button';
import { css } from '@stitches/core';
import { JSX } from 'solid-js';

interface ButtonGroupProps {
  children: JSX.ArrayElement;
}

const buttonGroupStyles = css({
  display: "flex",
  [`& .${buttonStyles}`]: {
    "&:first-of-type": {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    "&:last-of-type": {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    "&:not(:first-of-type):not(:last-of-type)": {
      borderRadius: 0,
      margin: "0 2px",
    },
  },
});

export const ButtonGroup = (props: ButtonGroupProps) => {
  return <div class={buttonGroupStyles()}>{props.children}</div>;
};
