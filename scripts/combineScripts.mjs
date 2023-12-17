import fs from "fs";
import path from "path";

const CORE_DATA = "./data";
const FE_DATA_PATH = "./src/data";

const files = fs.readdirSync(FE_DATA_PATH);

const data = files.reduce((acc, file) => {
  const fileContents = JSON.parse(
    fs.readFileSync(path.join(FE_DATA_PATH, file))
  );
  return acc.concat(fileContents);
}, []);

fs.writeFileSync(
  path.join(CORE_DATA, "data.json"),
  JSON.stringify(data, null, 2)
);
