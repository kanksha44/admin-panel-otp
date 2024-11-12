import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const url = req.nextUrl.clone();

  if (
    url.pathname.startsWith("/admin/dashboard") ||
    url.pathname.startsWith("/admin/users")
  ) {
    if (!token) {
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
