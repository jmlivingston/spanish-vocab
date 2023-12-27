import TEST_PARAMS from "TEST_PARAMS";
import { getTestGroupData } from "helpers";
import dynamic from "next/dynamic";

const TestWrapper = dynamic(() => import("components/TestWrapper"), {
  loading: () => <p>Loading...</p>,
});

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
