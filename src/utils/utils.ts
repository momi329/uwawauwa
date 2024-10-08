// ====================================================================================
//                              Question 2
// ====================================================================================

// 請根據如下條件實作找出數字 0 到 20 間重疊與未包含的數字區間 function
// ○ function name: getNumberIntervals
// ○ function input : [[6, 11], [5, 8], [17, 20], [7, 7], [14,17]]
// ○ function output: { overlap: [[6, 8], [17, 17]], notInclude: [[0, 4], [12, 13]] }

export const getNumberIntervals = (
  input: number[][],
  { max = 20, min = 0 }
) => {
  const overlap: number[][] = [];
  const notInclude: number[][] = [];

  // 用來記錄是否重疊
  const memoryArr = Array.from({ length: max - min + 1 }).fill(0) as number[];
  input.forEach((nums, index) => {
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
