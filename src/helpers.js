import { kv } from "@vercel/kv";
import fs from "fs/promises";
import { join } from "path";
import { cache } from "react";
import { STORAGE_KEYS } from "./CONSTANTS";

const getTestKey = cache(({ user }) => {
  return `${STORAGE_KEYS.TEST}_${user}`;
});

const getTestGroupData = cache(async ({ testGroupId }) => {
  const file = await fs.readFile(join(process.cwd(), `/public/data/${testGroupId}.json`), "utf8");
  const testGroupData = JSON.parse(file);
  return testGroupData;
});

const getUserData = cache(async () => {
  const user = await kv.get(STORAGE_KEYS.USER);
  const data = (await kv.get(getTestKey({ user }))) || {};
  return { data, user };
});

async function setUserData({ data, user }) {
  await kv.set(getTestKey({ user }), data);
}

export { getTestGroupData, getTestKey, getUserData, setUserData };
