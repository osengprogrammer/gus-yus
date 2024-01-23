// @ts-nocheck
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getSession } from "next-auth/react";

const middleware = withAuth(
  async (req) => {
    // Retrieve the session asynchronously
    const session = await getSession({ req });

    // Check if the user is authenticated
    if (!session?.user) {
      // If not authenticated, and the request is for the home page, redirect to the login page
      if (req.nextUrl.pathname === "/") {
        return NextResponse.redirect("/auth/login", req.url);
      }
      // For other pages, you can handle redirection based on your specific logic
      // ...

      // If not authenticated, redirect to the login page
       return NextResponse.redirect("/auth/login", req.url);
    }

    // Your role-based access control logic goes here
    if (req.nextUrl.pathname.startsWith("/admin") && session.user.role !== "admin") {
      return NextResponse.redirect("/",req.url);
    }

    if (req.nextUrl.pathname.startsWith("/user") && session.user.role !== "user") {
      return NextResponse.redirect("/auth/login?message=You Are Not Authorized!");
    }

    // If the user is authenticated and has the required role, allow access
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export default middleware;

export const config = {
  // Add other matchers based on your application's routing needs
  matcher: ["/admin/:path*", "/user/:path*", "/:path*"],
};
