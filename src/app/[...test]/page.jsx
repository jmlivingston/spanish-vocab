import TEST_PARAMS from "TEST_PARAMS";
import TestWrapper from "components/TestWrapper";
import { getTestGroupData } from "helpers";

export default async function Page({ params: { test } }) {
  const [testType, testGroupId, testId] = test;
  const testGroupData = await getTestGroupData({ testGroupId });
  return (
    <TestWrapper
      isReview={testType === "review"}
      testGroupData={testGroupData}
      testGroupId={testGroupId}
      testId={Number.parseInt(testId)}
    />
  );
}

export function generateStaticParams() {
  return TEST_PARAMS;
}
