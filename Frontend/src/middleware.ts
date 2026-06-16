import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Next.js Edge Routing Middleware
 * Intercepts navigation requests and enforces strict access control policies
 */
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Read the authentication token key value directly from the browser cookies layout
  const hasToken = request.cookies.has("doctor_app_token");

  // Rule 1: If a public user tries to access private dashboards without being logged in, kick them to login
  if (!hasToken && (path.startsWith("/dashboard") || path.startsWith("/appointments") || path.startsWith("/admin"))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Rule 2: If a logged-in user explicitly visits login or register pages, skip them and push them forward
  if (hasToken && (path === "/login" || path === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Allow the web request to proceed smoothly if no routing rules are violated
  return NextResponse.next();
}

/**
 * Route Matcher Configuration
 * Specifies exactly which matching paths this edge routing shield should actively guard
 */
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/appointments/:path*",
    "/admin/:path*",
    "/login",
    "/register"
  ],
};
