import fs from "fs";
import path from "path";

const CORE_DATA = "./data";
const FE_DATA_PATH = "./src/data";

const splitAmount = 100;

const data = JSON.parse(fs.readFileSync(path.join(CORE_DATA, "data.json")));

if (fs.existsSync(FE_DATA_PATH)) {
  fs.rmdirSync(FE_DATA_PATH, { recursive: true });
}
fs.mkdirSync(FE_DATA_PATH);

const splitCount = data.length / splitAmount;

const routes = [];

for (let i = 0; i < splitCount; i++) {
  const start = i * splitAmount;
  const end = i * splitAmount + splitAmount;
  const newData = data.slice(start, end);
  const route = `${start + 1}_${end}`;
  routes.push(route);
  fs.writeFileSync(
    path.join(FE_DATA_PATH, `${route}.json`),
    JSON.stringify(newData, null, 2)
  );
}
