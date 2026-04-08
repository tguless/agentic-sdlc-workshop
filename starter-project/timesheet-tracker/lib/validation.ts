import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().trim().email("Valid email is required"),
  displayName: z.string().trim().min(1, "Display name is required"),
});

export const createProjectSchema = z.object({
  name: z.string().trim().min(1, "Project name is required"),
  clientName: z.string().trim().optional(),
  isActive: z.boolean().optional().default(true),
});

export const createTimeEntrySchema = z.object({
  userId: z.string().trim().min(1),
  projectId: z.string().trim().min(1),
  entryDate: z.string().date(),
  startTime: z.string().regex(/^\d{2}:\d{2}$/),
  endTime: z.string().regex(/^\d{2}:\d{2}$/),
  notes: z.string().trim().optional(),
  billable: z.boolean().optional().default(true),
});
