import { AnyColor, colord } from 'colord';
import type { Colors, ColorScale } from "@concrete-ui/types";

export function generateColors(baseColor: AnyColor): Colors {
  // TODO figure out how can we detect (and correct) input colors that
  // are too bright or too dark (so basically, can we normalize the brandColor value)
  const base = colord(baseColor);
  const subduedBase = base.desaturate(0.5);

  return {
    base: generateColorScale(base.toHex()),
    subdued: generateColorScale(subduedBase.toHex()),
  };
}

function generateColorScale(baseColor: AnyColor): ColorScale {
  const base = colord(baseColor);

  return {
    "-4": base.darken(0.45).toHex(),
    "-3": base.darken(0.325).toHex(),
    "-2": base.darken(0.2).toHex(),
    "-1": base.darken(0.075).toHex(),
    0: base.toHex(),
    1: base.lighten(0.075).toHex(),
    2: base.lighten(0.2).toHex(),
    3: base.lighten(0.325).toHex(),
    4: base.lighten(0.45).toHex(),
  };
}
