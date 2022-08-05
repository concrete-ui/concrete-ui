import { AnyColor, colord } from 'colord';

export function generateColors(baseColor: AnyColor) {
  // TODO figure out how can we detect (and correct) input colors that
  // are too bright or too dark (so basically, can we normalize the brandColor value)
  const base = colord(baseColor);
  const subduedBase = base.desaturate(0.5);

  return {
    ...generateColorScale(base.toHex(), "base"),
    ...generateColorScale(subduedBase.toHex(), "subdued"),
  };
}

function generateColorScale(baseColor: AnyColor, prefix: string) {
  const base = colord(baseColor);

  return {
    [`${prefix}-1`]: base.darken(0.45).toHex(),
    [`${prefix}-25`]: base.darken(0.325).toHex(),
    [`${prefix}-50`]: base.darken(0.2).toHex(),
    [`${prefix}-75`]: base.darken(0.075).toHex(),
    [`${prefix}-100`]: base.toHex(),
    [`${prefix}-250`]: base.lighten(0.075).toHex(),
    [`${prefix}-500`]: base.lighten(0.2).toHex(),
    [`${prefix}-750`]: base.lighten(0.325).toHex(),
    [`${prefix}-999`]: base.lighten(0.45).toHex(),
  };
}
