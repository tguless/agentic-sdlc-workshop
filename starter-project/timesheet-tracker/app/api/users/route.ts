import { apiError, apiSuccess } from "@/lib/errors";
import { createUser, listUsers } from "@/lib/repositories/users";
import { createUserSchema } from "@/lib/validation";

export async function GET() {
  try {
    const data = await listUsers();
    return apiSuccess(data);
  } catch (error) {
    return apiError(error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = createUserSchema.parse(body);
    const data = await createUser(input);
    return apiSuccess(data, 201);
  } catch (error) {
    return apiError(error);
  }
}
