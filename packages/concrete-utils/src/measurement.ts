export function measurementToCssUnit(measurement: number, isRelative = false) {
  return `${measurement / 4}${isRelative === true ? "em" : "rem"}`;
}
