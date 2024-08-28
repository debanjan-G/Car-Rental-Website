import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();
  res.headers.append(
    "ACCESS-CONTROL-ALLOW-ORIGIN",
    "https://urbandrive-debanjan-ghosals-projects.vercel.app"
  );
  return res;
}

export const config = {
  matcher: ["/api/:path*"],
};
