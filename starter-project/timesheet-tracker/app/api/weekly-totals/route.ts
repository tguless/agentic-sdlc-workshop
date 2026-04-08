import { apiError, apiSuccess } from "@/lib/errors";
import { weeklyTotals } from "@/lib/repositories/time-entries";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const weekStart = searchParams.get("weekStart") ?? undefined;
    const data = await weeklyTotals(weekStart);
    return apiSuccess(data);
  } catch (error) {
    return apiError(error);
  }
}
