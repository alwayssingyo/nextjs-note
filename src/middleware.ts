import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

export const config = {
  // produts/slug 다이나믹 경로에 해당하는 곳에서만 미들웨어 실행(path가 하나 또는 많은 경우)
  matcher: ["/products/:path+"],
  // paroducts 이하 path가 있거나(많거나) 없거나 둘 다 가능
  // matcher: ["/products/:path*"],
};
