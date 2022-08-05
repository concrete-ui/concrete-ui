import { generateCss } from '../../defaultTheme';
import { measurementToCssUnit } from '@concrete-ui/utils';
import { ParentComponent } from 'solid-js';
import type { VariantProps } from "@stitches/core";

export const buttonStyles = generateCss({
  borderRadius: measurementToCssUnit(2, true),
  padding: `${measurementToCssUnit(2, true)} ${measurementToCssUnit(6, true)}`,
  fontWeight: 600,
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "CurrentColor",
  "&:focus": {
    outline: "none",
  },
  "&:focus-visible": {
    outlineStyle: "solid",
    outlineColor: "transparent",
  },

  variants: {
    variant: {
      solid: {},
      outline: {
        background: "transparent",
      },
    },
    colorScheme: {
      base: {
        "&:focus-visible": {
          boxShadow: `white 0px 0px 1px 2px, #9477e2 0px 0px 1px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`,
        },
      },
      subdued: {
        "&:focus-visible": {
          boxShadow: `white 0px 0px 1px 2px, #c9c5d4 0px 0px 1px 4px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`,
        },
      },
    },
  },

  compoundVariants: [
    {
      variant: "solid",
      colorScheme: "base",
      css: {
        background: "$base-100",
        color: "$base-999",
        borderColor: "$base-100",
        "&:hover": {
          background: "$base-75",
        },
        "&:active": {
          background: "$base-50",
        },
      },
    },

    {
      variant: "outline",
      colorScheme: "base",
      css: {
        color: "$base-100",
        "&:hover": {
          background: "$base-999",
        },
        "&:active": {
          background: "$base-750",
          color: "$base-999",
        },
      },
    },

    {
      variant: "solid",
      colorScheme: "subdued",
      css: {
        background: "$subdued-750",
        color: "$subdued-75",
        borderColor: "$subdued-750",
        "&:hover": {
          background: "$subdued-500",
          color: "$subdued-50",
        },
        "&:active": {
          background: "$subdued-250",
          color: "$subdued-999",
        },
      },
    },

    {
      variant: "outline",
      colorScheme: "subdued",
      css: {
        color: "$subdued-250",
        borderColor: "$subdued-750",
        "&:hover": {
          background: "$subdued-999",
          borderColor: "$subdued-500",
        },
        "&:active": {
          background: "$subdued-750",
          borderColor: "$subdued-250",
          color: "$subdued-75",
        },
      },
    },
  ],

  defaultVariants: {
    variant: "solid",
    colorScheme: "base",
  },
});

export const Button: ParentComponent<VariantProps<typeof buttonStyles>> = (
  props
) => {
  return (
    <button
      {...props}
      class={buttonStyles({
        variant: props.variant,
        colorScheme: props.colorScheme,
      })}
    >
      {props.children}
    </button>
  );
};
