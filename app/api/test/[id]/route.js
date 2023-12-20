import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { getTestKey, getUserData } from "../../../../helpers";

export async function DELETE(request, { params }) {
  const id = Number.parseInt(params.id);
  const { test } = await request.json();
  const { data, user } = await getUserData({ test });
  const updatedData = data.filter((datum) => datum !== id);
  await kv.set(getTestKey({ test, user }), updatedData);
  return NextResponse.json({ data: updatedData });
}

export async function PUT(request, { params }) {
  const id = Number.parseInt(params.id);
  const { test } = await request.json();
  const { data, user } = await getUserData({ test });
  const updatedData = [...new Set([...data, id])];
  await kv.set(getTestKey({ test, user }), updatedData);
  return NextResponse.json({ data: updatedData });
}
