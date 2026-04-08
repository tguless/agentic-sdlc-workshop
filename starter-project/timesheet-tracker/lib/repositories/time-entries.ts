import { addDays } from "date-fns";

import { calculateHoursDecimal, weekStartFromISO } from "@/lib/time";
import { prisma } from "@/lib/prisma";

type CreateTimeEntryInput = {
  userId: string;
  projectId: string;
  entryDate: string;
  startTime: string;
  endTime: string;
  notes?: string;
  billable?: boolean;
};

export async function listTimeEntries(weekStartISO?: string, projectId?: string) {
  const weekStart = weekStartFromISO(weekStartISO);
  const weekEnd = addDays(weekStart, 7);

  return prisma.timeEntry.findMany({
    where: {
      entryDate: {
        gte: weekStart,
        lt: weekEnd,
      },
      ...(projectId ? { projectId } : {}),
    },
    include: { project: true, user: true },
    orderBy: [{ entryDate: "desc" }, { startTime: "asc" }],
  });
}

export async function createTimeEntry(input: CreateTimeEntryInput) {
  const hoursDecimal = calculateHoursDecimal(
    input.entryDate,
    input.startTime,
    input.endTime,
  );

  return prisma.timeEntry.create({
    data: {
      userId: input.userId,
      projectId: input.projectId,
      entryDate: new Date(`${input.entryDate}T00:00:00`),
      startTime: input.startTime,
      endTime: input.endTime,
      hoursDecimal,
      notes: input.notes || null,
      billable: input.billable ?? true,
    },
    include: { project: true, user: true },
  });
}

export async function deleteTimeEntry(id: string) {
  return prisma.timeEntry.delete({
    where: { id },
  });
}

export async function weeklyTotals(weekStartISO?: string) {
  const weekStart = weekStartFromISO(weekStartISO);
  const weekEnd = addDays(weekStart, 7);

  const grouped = await prisma.timeEntry.groupBy({
    by: ["projectId"],
    where: {
      entryDate: {
        gte: weekStart,
        lt: weekEnd,
      },
    },
    _sum: { hoursDecimal: true },
  });

  const projects = await prisma.project.findMany({
    where: {
      id: { in: grouped.map((g) => g.projectId) },
    },
    select: { id: true, name: true },
  });

  const projectById = new Map(projects.map((p) => [p.id, p]));

  return grouped
    .map((item) => ({
      projectId: item.projectId,
      projectName: projectById.get(item.projectId)?.name ?? "Unknown Project",
      totalHours: Number(item._sum.hoursDecimal ?? 0),
    }))
    .sort((a, b) => b.totalHours - a.totalHours);
}
