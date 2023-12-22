import TEST_GROUPS from "TEST_GROUPS";
import TestWrapper from "components/TestWrapper";
import { getTestGroupData } from "helpers";

export default async function Page({ params: { testGroupId, testId } }) {
  const testGroupData = await getTestGroupData({ testGroupId });
  return (
    <TestWrapper isReview testGroupData={testGroupData} testGroupId={testGroupId} testId={Number.parseInt(testId)} />
  );
}

export function generateStaticParams() {
  return TEST_GROUPS;
}
