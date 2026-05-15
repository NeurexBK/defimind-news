import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {

  const pathname = req.nextUrl.pathname

  if (
    pathname.startsWith("/neurex-25852266602-admin")
  ) {

    const auth =
      req.cookies.get("sb-access-token")

    if (!auth) {

      return NextResponse.redirect(
        new URL("/login", req.url)
      )

    }

  }

  return NextResponse.next()

}

export const config = {

  matcher: [
    "/neurex-25852266602-admin/:path*"
  ],

}
