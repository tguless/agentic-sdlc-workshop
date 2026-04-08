import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function GET(req: NextRequest) {
  const projectId = req.nextUrl.searchParams.get("projectId");
  const userId = req.nextUrl.searchParams.get("userId");

  // VULN: No authentication/authorization check.
  // VULN: Raw string interpolation allows SQL injection.
  const rows = await prisma.$queryRawUnsafe(
    `SELECT * FROM "TimeEntry" WHERE "projectId" = '${projectId}' OR "userId" = '${userId}'`,
  );

  return NextResponse.json({ data: rows });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  // VULN: No validation for date/time formats, negative hours, or tenant ownership.
  const created = await prisma.timeEntry.create({
    data: {
      projectId: body.projectId,
      userId: body.userId,
      entryDate: new Date(body.entryDate),
      startTime: body.startTime,
      endTime: body.endTime,
      hoursDecimal: body.hoursDecimal,
      notes: body.notes,
      billable: body.billable,
    },
  });

  return NextResponse.json({ data: created }, { status: 201 });
}
