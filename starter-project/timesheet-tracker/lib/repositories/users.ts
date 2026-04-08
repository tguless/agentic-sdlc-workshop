import { prisma } from "@/lib/prisma";

export async function listUsers() {
  return prisma.user.findMany({
    orderBy: [{ createdAt: "asc" }],
  });
}

export async function createUser(input: { email: string; displayName: string }) {
  return prisma.user.create({
    data: {
      email: input.email,
      displayName: input.displayName,
    },
  });
}
