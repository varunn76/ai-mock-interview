import { signUp } from "@/lib/actions/auth.action";

export async function POST(req: Request) {
  const body = await req.json();
  const result = await signUp(body);
  return new Response(JSON.stringify(result), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
