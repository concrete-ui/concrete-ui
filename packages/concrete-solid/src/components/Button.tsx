import { Component, JSX } from 'solid-js';
import { measurementToCssUnit } from '@concrete-ui/utils';
import { styled } from 'solid-styled-components';
import { ThemeProps } from '@concrete-ui/types';
import { useTheme } from '../provider';

export interface ButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement>,
    ThemeProps {
  variant: "solid" | "outline" | "subdued";
  semantics: "brand";
}

const ButtonStyled = styled("button")(
  ({ theme: { colors }, variant, semantics }: ButtonProps) => ({
    borderRadius: measurementToCssUnit(2, true),
    padding: `${measurementToCssUnit(2, true)} ${measurementToCssUnit(
      6,
      true
    )}`,
    fontWeight: 600,
    background:
      variant === "outline" ? "transparent" : colors[semantics].base[0],
    color:
      variant === "outline"
        ? colors[semantics].base[0]
        : colors[semantics].subdued[4],
    border: `1px solid currentcolor`,

    "&:hover": {
      background:
        variant === "outline"
          ? colors[semantics].base[4]
          : colors[semantics].base[-1],
    },

    "&:active": {
      background:
        variant === "outline"
          ? colors[semantics].base[3]
          : colors[semantics].base[-2],
      color: variant === "outline" ? colors[semantics].base[-1] : "inherit",
    },
  })
);

export const Button: Component<ButtonProps> = (props) => {
  const theme = useTheme();

  return (
    <ButtonStyled {...props} theme={theme}>
      Accept
    </ButtonStyled>
  );
};
