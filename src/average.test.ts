import { mean, median, mode, standardDeviation } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [1, 4];
  const expected: number = 2.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("mean of [2, 4] is 3", () => {
  expect(mean([2, 4])).toBe(3);
});

test("mean of empty list throws", () => {
  expect(() => mean([])).toThrow("Cannot calculate mean of empty array");
});

test("median of [1,2,6,7,8] is 6", () => {
  expect(median([1,2,6,7,8])).toBe(6);
});

test("median of [1,2,5,6,7,8] is 5.5", () => {
  expect(median([1,2,5,6,7,8])).toBe(5.5);
});

test("median of empty throws", () => {
  expect(() => median([])).toThrow("Cannot calculate median of empty array");
});

test("mode of [1,1,2,2,3] is [1,2]", () => {
  expect(mode([1,1,2,2,3])).toEqual([1,2]);
});

test("standard deviation of [1,3] is 1", () => {
  expect(standardDeviation([1,3])).toBeCloseTo(1);
});

test("standard deviation of [1,5] is 2", () => {
  expect(standardDeviation([1,5])).toBeCloseTo(2);
});

test("standard deviation of [1,2,3,4,5] is ~1.414", () => {
  const result = standardDeviation([1,2,3,4,5]);
  expect(result).toBeGreaterThan(1.41);
  expect(result).toBeLessThan(1.42);
});
