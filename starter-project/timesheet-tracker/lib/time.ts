import { parseISO, startOfWeek } from "date-fns";

import { AppError } from "./errors";

export function toDateTime(entryDate: string, time: string): Date {
  return new Date(`${entryDate}T${time}:00`);
}

export function calculateHoursDecimal(
  entryDate: string,
  startTime: string,
  endTime: string,
): number {
  const start = toDateTime(entryDate, startTime);
  const end = toDateTime(entryDate, endTime);
  const milliseconds = end.getTime() - start.getTime();
  const hours = milliseconds / (1000 * 60 * 60);

  if (!Number.isFinite(hours) || hours <= 0) {
    throw new AppError(
      "Invalid duration: ensure end time is after start time and duration is positive",
      400,
      "INVALID_DURATION",
    );
  }

  return Math.round(hours * 100) / 100;
}

export function weekStartFromISO(weekStartISO?: string): Date {
  if (weekStartISO) {
    return parseISO(weekStartISO);
  }

  return startOfWeek(new Date(), { weekStartsOn: 1 });
}
