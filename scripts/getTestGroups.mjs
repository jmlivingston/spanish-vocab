import fs from "fs";

const TEST_COUNT = 5000;
const splitAmount = 100;
const splitCount = TEST_COUNT / splitAmount;

const groups = [...new Array(splitCount)].map((_, index) => {
  const start = index * splitAmount + 1;
  const end = index * splitAmount + splitAmount;
  const testGroupId = `${start}_${end}`;
  return {
    end,
    start,
    testGroupId,
  };
});

fs.writeFileSync("./src/TEST_GROUPS.js", `const data = ${JSON.stringify(groups, null, 2)};\nexport default data;\n`);

const params = [...new Array(splitCount)].reduce((acc, _, index) => {
  const start = index * splitAmount + 1;
  const end = index * splitAmount + splitAmount;
  const testGroupId = `${start}_${end}`;
  acc.push({ test: ["test", testGroupId, start.toString()] });
  acc.push({ review: ["review", testGroupId] });
  return acc;
}, []);

fs.writeFileSync("./src/TEST_PARAMS.js", `const data = ${JSON.stringify(params, null, 2)};\nexport default data;\n`);
