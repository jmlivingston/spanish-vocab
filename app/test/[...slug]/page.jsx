import TestWrapper from "../../../components/TestWrapper";
import { getTestGroupData } from "../../../helpers";

export default async function Page({ params }) {
  const testGroupId = params.slug[0];
  const { data } = await getTestGroupData({ testGroupId });
  return <TestWrapper testGroupData={data} testGroupId={testGroupId} testId={Number.parseInt(params.slug[1])} />;
}
