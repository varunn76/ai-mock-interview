import { signIn } from "@/lib/actions/auth.action";

export async function POST(req: Request) {
  const body = await req.json();
  const result = await signIn(body);
  return Response.json(result);
}
