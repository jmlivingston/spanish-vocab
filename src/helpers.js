import { kv } from "@vercel/kv";
import { promises as fs } from "fs";
import { STORAGE_KEYS } from "./CONSTANTS";

function getTestKey({ user }) {
  return `${STORAGE_KEYS.TEST}_${user}`;
}

async function getTestGroupData({ testGroupId }) {
  const file = await fs.readFile(process.cwd() + `/src/data/${testGroupId}.json`, "utf8");
  const testGroupData = JSON.parse(file);
  return testGroupData;
}

async function getUserData() {
  console.log("getUserData");
  const user = await kv.get(STORAGE_KEYS.USER);
  const data = (await kv.get(getTestKey({ user }))) || {};
  return { data, user };
}

async function setUserData({ data, user }) {
  console.log("setUserData");
  await kv.set(getTestKey({ user }), data);
}

export { getTestGroupData, getTestKey, getUserData, setUserData };
