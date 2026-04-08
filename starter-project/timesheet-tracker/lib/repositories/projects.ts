import { prisma } from "@/lib/prisma";

export async function listProjects() {
  return prisma.project.findMany({
    where: { isActive: true },
    orderBy: [{ createdAt: "desc" }],
  });
}

export async function createProject(input: {
  name: string;
  clientName?: string;
  isActive?: boolean;
}) {
  return prisma.project.create({
    data: {
      name: input.name,
      clientName: input.clientName || null,
      isActive: input.isActive ?? true,
    },
  });
}
