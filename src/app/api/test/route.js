import { NextResponse } from "next/server";
import { getUserData, setUserData } from "../../../helpers";

export async function GET() {
  const { data, user } = await getUserData();
  return NextResponse.json({ data, user });
}

export async function PUT(request) {
  const { data, user } = await request.json();
  await setUserData({ data, user });
  return NextResponse.json({});
}
