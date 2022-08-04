import { Colors, ThemeProps } from '@concrete-ui/types';
import { Component, JSX } from 'solid-js';
import { measurementToCssUnit } from '@concrete-ui/utils';
import { styled } from 'solid-styled-components';
import { useTheme } from '../provider';

export interface ButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement>,
    ThemeProps {
  variant: "solid" | "outline";
  colorScheme: "base" | "subdued";
}

type ColorStates = {
  inactive: string;
  hover?: string;
  active?: string;
};

type ColorStyles = {
  fg: ColorStates;
  bg: ColorStates;
  border?: ColorStates;
};

function generateColorStyles(
  colors: Colors,
  colorScheme: "base" | "subdued",
  variant: "solid" | "outline"
): ColorStyles {
  switch (colorScheme) {
    case "subdued":
      return {
        bg: {
          inactive:
            variant === "solid" ? colors[colorScheme][4] : "transparent",
          hover:
            variant === "solid"
              ? colors[colorScheme][3]
              : colors[colorScheme][4],
          active:
            variant === "solid"
              ? colors[colorScheme][2]
              : colors[colorScheme][3],
        },
        fg: {
          inactive:
            variant === "solid"
              ? colors[colorScheme][1]
              : colors[colorScheme][0],
          hover: variant === "solid" ? colors[colorScheme][0] : undefined,
          active:
            variant === "solid"
              ? colors[colorScheme][4]
              : colors[colorScheme][-1],
        },
        border: {
          inactive: variant === "solid" ? "transparent" : "currentcolor",
        },
      };

    default:
      // Default color scheme, which will be applied if the current case
      // is not explicitely defined in the switch statement
      return {
        bg: {
          inactive:
            variant === "solid" ? colors[colorScheme][0] : "transparent",
          hover:
            variant === "solid"
              ? colors[colorScheme][-1]
              : colors[colorScheme][4],
          active:
            variant === "solid"
              ? colors[colorScheme][-2]
              : colors[colorScheme][3],
        },
        fg: {
          inactive:
            variant === "solid"
              ? colors[colorScheme][4]
              : colors[colorScheme][0],
        },
      };
  }
}

const ButtonStyled = styled("button")(
  ({ theme: { colors }, variant, colorScheme }: ButtonProps) => {
    const { bg, fg, border } = generateColorStyles(
      colors,
      colorScheme,
      variant
    );

    return {
      borderRadius: measurementToCssUnit(2, true),
      padding: `${measurementToCssUnit(2, true)} ${measurementToCssUnit(
        6,
        true
      )}`,
      fontWeight: 600,
      background: bg.inactive,
      color: fg.inactive,
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: !border ? "currentcolor" : border.inactive,

      "&:hover": {
        background: bg.hover,
        color: fg.hover,
      },

      "&:active": {
        background: bg.active,
        color: fg.active,
      },

      // TODO add focus-visible
    };
  }
);

export const Button: Component<ButtonProps> = (props) => {
  const theme = useTheme();

  return (
    <ButtonStyled {...props} theme={theme}>
      Accept
    </ButtonStyled>
  );
};
