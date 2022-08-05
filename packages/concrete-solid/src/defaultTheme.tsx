import { createStitches } from '@stitches/core';
import { generateColors } from '@concrete-ui/utils';

const defaultBrandColor = "#562AC9";

export const { css: generateCss } = createStitches({
  theme: {
    colors: generateColors(defaultBrandColor),
  },
});
