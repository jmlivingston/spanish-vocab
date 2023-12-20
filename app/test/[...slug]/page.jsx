import TestWrapper from "../../../components/TestWrapper";
import { getTestData } from "../../../helpers";

export default async function Page({ params }) {
  const { data, reviewIds } = await getTestData({ test: params.slug[0] });
  return (
    <TestWrapper
      data={data}
      test={params.slug[0]}
      reviewIds={reviewIds}
      testIndex={Number.parseInt(params.slug[1]) - 1}
    />
  );
}
