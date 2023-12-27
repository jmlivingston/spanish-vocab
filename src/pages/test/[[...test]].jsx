// import "@picocss/pico/css/pico.min.css";
import TEST_PARAMS from "TEST_PARAMS";
// import "app/globals.css";
// import "app/normalize.css";
import TestWrapper from "components/TestWrapper";
import fs from "fs/promises";

export const getStaticProps = async ({ params: { test } }) => {
  const [testGroupId] = test;
  const file = await fs.readFile(`./public/data/${testGroupId}.json`, "utf8");
  const testGroupData = JSON.parse(file);
  return { props: { testGroupData, testGroupId } };
};

export default function Page({ testGroupData, testGroupId }) {
  return <TestWrapper testGroupData={testGroupData} testGroupId={testGroupId} />;
}

export async function getStaticPaths() {
  return TEST_PARAMS;
}
