import { sum } from "../sum";

test("Sum function to add two numbers", () => {
  const result = sum(3, 7);
  expect(result).toBe(10);
});
