import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();

  // Set CORS headers
  res.headers.set(
    "Access-Control-Allow-Origin",
    "https://urbandrive-debanjan-ghosals-projects.vercel.app"
  );
  res.headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type"
  );

  // Handle preflight requests (OPTIONS)
  if (req.method === "OPTIONS") {
    return new NextResponse(null, { status: 204 }); // No content
  }

  return res;
}

export const config = {
  matcher: ["/api/:path*"],
};
