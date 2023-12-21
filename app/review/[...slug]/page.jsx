import TestWrapper from "../../../components/TestWrapper";
import { getTestGroupData } from "../../../helpers";

export default async function Page({ params }) {
  const { data } = await getTestGroupData({ testGroupId: params.slug[0] });
  return (
    <TestWrapper testGroupData={data} isReview testGroupId={params.slug[0]} testId={Number.parseInt(params.slug[1])} />
  );
}
