import { AGE_RANGE_MAX, AGE_RANGE_MIN } from "../constants";

export const addComma = (num: string) => {
  if (num === "") return "";

  const [integer, decimal] = num.toString().split(".");
  const formatNum = integer.replace(/(-?\d)(?=(\d{3})+(?!\d))/g, "$1,");

  if (decimal !== undefined) {
    return decimal === "" ? `${formatNum}.` : `${formatNum}.${decimal}`;
  }

  return decimal ? `${formatNum}.${decimal}` : formatNum;
};

export const getNumberIntervals = (
  input: [number, number][],
  { max = AGE_RANGE_MAX, min = AGE_RANGE_MIN }
) => {
  const overlap: [number, number][] = [];
  const notInclude: [number, number][] = [];

  // 用來記錄是否重疊
  const memoryArr = Array.from({ length: max - min + 1 }).fill(0) as number[];
  input.forEach((nums) => {
    const [min, max] = nums;
    for (let i = min; i <= max; i += 1) {
      memoryArr[i] += 1;
    }
  });

  // 紀錄是否連續
  let isNotIncludeContinue: boolean;
  let isOverlapContinue: boolean;
  memoryArr.forEach((item: number, index: number) => {
    if (item < 1) {
      isOverlapContinue = false;

      if (notInclude.length === 0 || !isNotIncludeContinue) {
        isNotIncludeContinue = true;
        notInclude.push([index, index]);
      } else {
        notInclude[notInclude.length - 1][1] = index;
      }
    } else if (item > 1) {
      isNotIncludeContinue = false;

      if (overlap.length === 0 || !isOverlapContinue) {
        isOverlapContinue = true;
        overlap.push([index, index]);
      } else {
        overlap[overlap.length - 1][1] = index;
      }
    }
  });

  return {
    overlap,
    notInclude,
  };
};

export const removeComma = (num: string) => {
  return num.replace(/,/g, "");
};
