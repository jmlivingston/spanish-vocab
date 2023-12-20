import { kv } from "@vercel/kv";
import { promises as fs } from "fs";
import { STORAGE_KEYS } from "./CONSTANTS";

function getTestKey({ test, user }) {
  return `${STORAGE_KEYS.TEST}_${user}_${test}`;
}

async function getReviewIds({ test }) {
  const user = await kv.get(STORAGE_KEYS.USER);
  const reviewIds = await kv.get(getTestKey({ test, user }));
  return reviewIds || [];
}

async function getTestData({ test }) {
  const file = await fs.readFile(process.cwd() + `/app/data/${test}.json`, "utf8");
  const data = JSON.parse(file);
  const user = await kv.get(STORAGE_KEYS.USER);
  const reviewIds = await kv.get(getTestKey({ test, user }));
  return { data, reviewIds: reviewIds?.[test] || [], reviewIds };
}

async function getUserData({ test }) {
  const user = await kv.get(STORAGE_KEYS.USER);
  const data = (await kv.get(getTestKey({ test, user }))) || [];
  return { data, user };
}

export { getReviewIds, getTestData, getTestKey, getUserData };
