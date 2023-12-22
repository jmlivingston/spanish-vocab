import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { STORAGE_KEYS } from "./CONSTANTS";

export const config = {
  matcher: ["/", "/index"],
};

export function middleware(req) {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");
    if (user === "jmlivingston" && pwd === "Kai.zen8") {
      kv.set(`${STORAGE_KEYS.USER}`, user);
      return NextResponse.next();
    }
  }
  url.pathname = "/api/auth";

  return NextResponse.rewrite(url);
}
