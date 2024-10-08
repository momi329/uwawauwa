import { getNumberIntervals } from "../src/utils/utils";

describe("getNumberIntervals", () => {
  test("handles overlapping and not included intervals", () => {
    const input: [number, number][] = [
      [6, 11],
      [5, 8],
      [17, 20],
      [7, 7],
      [14, 17],
    ];
    const expectedOutput = {
      overlap: [
        [6, 8],
        [17, 17],
      ],
      notInclude: [
        [0, 4],
        [12, 13],
      ],
    };
    expect(getNumberIntervals(input, { max: 20, min: 0 })).toEqual(
      expectedOutput
    );
  });
});
