import { NextResponse } from "next/server";
import { setUserData } from "../../../helpers";

export async function PUT(request) {
  const { data, user } = await request.json();
  await setUserData({ data, user });
  return NextResponse.json({});
}
