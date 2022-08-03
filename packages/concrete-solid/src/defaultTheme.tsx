import { generateColors } from '@concrete-ui/utils';
import { Theme } from '@concrete-ui/types';

const defaultBrandColor = "#562AC9";

export const defaultTheme: Theme = {
  colors: generateColors(defaultBrandColor),
};
