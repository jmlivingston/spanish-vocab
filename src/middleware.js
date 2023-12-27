import { NextResponse } from "next/server";
import { IS_MOCKED, STORAGE_KEYS } from "./CONSTANTS";

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
      if (!IS_MOCKED) {
        import("helpers").then((helpers) => {
          helpers.kv.set(`${STORAGE_KEYS.USER}`, user);
        });
      } else {
        return NextResponse.next();
      }
    }
  }
  url.pathname = "/api/auth";

  return NextResponse.rewrite(url);
}
