import { AppError, apiError, apiSuccess } from "@/lib/errors";
import {
  createTimeEntry,
  deleteTimeEntry,
  listTimeEntries,
} from "@/lib/repositories/time-entries";
import { createTimeEntrySchema } from "@/lib/validation";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const weekStart = searchParams.get("weekStart") ?? undefined;
    const projectId = searchParams.get("projectId") ?? undefined;

    const data = await listTimeEntries(weekStart, projectId);
    return apiSuccess(data);
  } catch (error) {
    return apiError(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = createTimeEntrySchema.parse(body);
    const data = await createTimeEntry(input);
    return apiSuccess(data, 201);
  } catch (error) {
    return apiError(error);
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      throw new AppError("Query parameter 'id' is required", 400, "MISSING_ID");
    }

    await deleteTimeEntry(id);
    return apiSuccess({ id });
  } catch (error) {
    return apiError(error);
  }
}
