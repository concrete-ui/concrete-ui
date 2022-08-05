import { Colors, ColorStyles, ThemeProps } from '@concrete-ui/types';
import { JSX, ParentComponent } from 'solid-js';
import { measurementToCssUnit } from '@concrete-ui/utils';
import { styled } from 'solid-styled-components';
import { useTheme } from '../../provider';

export interface ButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "solid" | "outline";
  colorScheme: "base" | "subdued";
}

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

export const ButtonStyled = styled("button")(
  ({ theme: { colors }, variant, colorScheme }: ButtonProps & ThemeProps) => {
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

      "&:focus": {
        outline: "none",
      },

      "&:focus-visible": {
        outlineStyle: "solid",
        outlineColor: "transparent",
        boxShadow: `white 0px 0px 1px 2px, ${colors[colorScheme][2]} 0px 0px 1px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`,
      },
    };
  }
);

export const Button: ParentComponent<ButtonProps> = (props) => {
  const theme = useTheme();

  return (
    <ButtonStyled {...props} theme={theme}>
      {props.children}
    </ButtonStyled>
  );
};
