import { subDays } from "date-fns";

import { prisma } from "../lib/prisma";

async function main() {
  await prisma.timeEntry.deleteMany();
  await prisma.project.deleteMany();
  await prisma.user.deleteMany();

  const [alex, maya] = await Promise.all([
    prisma.user.create({
      data: {
        email: "alex@example.com",
        displayName: "Alex Rivera",
      },
    }),
    prisma.user.create({
      data: {
        email: "maya@example.com",
        displayName: "Maya Singh",
      },
    }),
  ]);

  const [website, onboarding] = await Promise.all([
    prisma.project.create({
      data: {
        name: "Website Revamp",
        clientName: "Acme Co.",
      },
    }),
    prisma.project.create({
      data: {
        name: "Customer Onboarding",
        clientName: "Northwind",
      },
    }),
  ]);

  await prisma.timeEntry.createMany({
    data: [
      {
        userId: alex.id,
        projectId: website.id,
        entryDate: subDays(new Date(), 1),
        startTime: "09:00",
        endTime: "12:30",
        hoursDecimal: 3.5,
        notes: "Landing page updates",
      },
      {
        userId: maya.id,
        projectId: onboarding.id,
        entryDate: subDays(new Date(), 2),
        startTime: "13:00",
        endTime: "17:00",
        hoursDecimal: 4,
        notes: "Workflow documentation",
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    // eslint-disable-next-line no-console
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
