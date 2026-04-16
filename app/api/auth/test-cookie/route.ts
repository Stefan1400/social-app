import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value;

  if (!token) {
    return Response.json({ ok: false, message: "No token found ❌" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    return Response.json({
      ok: true,
      message: "Token valid ✅",
      decoded,
    });
  } catch (err) {
    return Response.json({
      ok: false,
      message: "Invalid token ❌",
    });
  }
}