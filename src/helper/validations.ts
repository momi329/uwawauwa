export const hasOverlap = (
  overlap: [number, number][],
  [minValue, maxValue]: [number, number]
) => {
  if (overlap.length === 0) return false;
  let result = false;
  overlap.forEach(([min, max]) => {
    if (minValue < min && maxValue < min) return;
    if (minValue > max && maxValue > max) return;
    result = true;
  });
  return result;
};
