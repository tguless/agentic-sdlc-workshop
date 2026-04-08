import { describe, expect, it } from "vitest";

import { AppError } from "./errors";
import { calculateHoursDecimal } from "./time";

describe("calculateHoursDecimal", () => {
  it("calculates positive durations", () => {
    expect(calculateHoursDecimal("2026-04-08", "09:00", "11:30")).toBe(2.5);
  });

  it("rejects zero durations", () => {
    expect(() =>
      calculateHoursDecimal("2026-04-08", "09:00", "09:00"),
    ).toThrow(AppError);
  });

  it("rejects negative durations", () => {
    expect(() =>
      calculateHoursDecimal("2026-04-08", "18:00", "09:00"),
    ).toThrow(AppError);
  });
});
