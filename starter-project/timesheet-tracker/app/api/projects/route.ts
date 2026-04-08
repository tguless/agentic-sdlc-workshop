import { createProject, listProjects } from "@/lib/repositories/projects";
import { createProjectSchema } from "@/lib/validation";
import { apiError, apiSuccess } from "@/lib/errors";

export async function GET() {
  try {
    const data = await listProjects();
    return apiSuccess(data);
  } catch (error) {
    return apiError(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = createProjectSchema.parse(body);
    const data = await createProject(input);
    return apiSuccess(data, 201);
  } catch (error) {
    return apiError(error);
  }
}
