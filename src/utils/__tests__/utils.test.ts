import { addComma, getNumberIntervals } from "../utils";

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

describe("addComma", () => {
  test("should format negative numbers with decimals", () => {
    expect(addComma("-7855948.9527")).toBe("-7,855,948.9527");
  });

  test("should format positive numbers with decimals", () => {
    expect(addComma("1234567.89")).toBe("1,234,567.89");
  });

  test("should format negative numbers without decimals", () => {
    expect(addComma("-1000000")).toBe("-1,000,000");
  });

  test("should format positive numbers without decimals", () => {
    expect(addComma("500")).toBe("500");
  });

  test("should handle zero", () => {
    expect(addComma("0")).toBe("0");
  });

  test("should format large numbers", () => {
    expect(addComma("1234567890")).toBe("1,234,567,890");
  });

  test("should format very small decimals", () => {
    expect(addComma("1234.1")).toBe("1,234.1");
  });

  test("should handle numbers with more than three decimal places", () => {
    expect(addComma("1234.123456")).toBe("1,234.123456");
  });

  test("should handle negative small decimals", () => {
    expect(addComma("-1234.1")).toBe("-1,234.1");
  });
});
