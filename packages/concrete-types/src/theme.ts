export type ColorScale = {
  4: string;
  3: string;
  2: string;
  1: string;
  0: string;
  "-1": string;
  "-2": string;
  "-3": string;
  "-4": string;
};

export type Colors = {
  base: ColorScale;
  subdued: ColorScale;
};

export type Theme = {
  colors: Colors;
};

export interface ThemeProps {
  theme: Theme;
}

export type ColorStates = {
  inactive: string;
  hover?: string;
  active?: string;
};

export type ColorStyles = {
  fg: ColorStates;
  bg: ColorStates;
  border?: ColorStates;
};
