import { kv as vercelKv } from "@vercel/kv";
import fs from "fs";
import { join } from "path";
import { IS_MOCKED, STORAGE_KEYS } from "./CONSTANTS";

const BASE_PATH = IS_MOCKED ? "." : process?.cwd();
const MOCK_STORAGE_PATH = join(BASE_PATH, "/public/data/storage.json");
const MOCK_USER = "jmlivingston";

const getMockStorage = () => {
  const file = fs.readFileSync(MOCK_STORAGE_PATH, "utf8");
  const data = JSON.parse(file);
  return data;
};

const setMockStorage = async (data) => {
  fs.writeFileSync(MOCK_STORAGE_PATH, JSON.stringify(data, null, 2));
};

const kv = IS_MOCKED
  ? Object.freeze({
      get: async (key) => {
        const data = await getMockStorage();
        let value;
        switch (key) {
          case STORAGE_KEYS.USER:
            value = data.user || MOCK_USER;
            break;
          case `${STORAGE_KEYS.TEST}_${MOCK_USER}`:
            value = data?.[`${STORAGE_KEYS.TEST}_${MOCK_USER}`] || {};
            break;
          default:
            break;
        }
        return value;
      },
      set: async (key, value) => {
        const data = await getMockStorage();
        setMockStorage({ ...data, [key]: value });
      },
    })
  : vercelKv;

const getTestKey = ({ user }) => {
  return `${STORAGE_KEYS.TEST}_${user}`;
};

const getTestGroupData = async ({ testGroupId }) => {
  const file = await fs.readFileSync(join(BASE_PATH, `/public/data/${testGroupId}.json`), "utf8");
  const testGroupData = JSON.parse(file);
  return testGroupData;
};

const getUserData = async () => {
  const user = await kv.get(STORAGE_KEYS.USER);
  const testKey = getTestKey({ user });
  const data = (await kv.get(testKey)) || {};
  return { data, user };
};

async function setUserData({ data, user }) {
  await kv.set(getTestKey({ user }), data);
}

export { getTestGroupData, getTestKey, getUserData, kv, setUserData };
