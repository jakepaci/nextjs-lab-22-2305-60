import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth-token")?.value;

  if (!authToken) {
    const originalPath = `${request.nextUrl.pathname}${request.nextUrl.search}`;
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", originalPath);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!login|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map)$).*)",
  ],
};
