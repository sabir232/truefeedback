import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;

  //redirection strategry
  return NextResponse.redirect(new URL("/home", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/sign-in", "/sign-up", "/", "/verify/:path*", "dashboard/:path*"],
};
