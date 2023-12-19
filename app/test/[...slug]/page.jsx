import { promises as fs } from "fs";
import TestWrapper from "../../../components/TestWrapper";

export default async function Page({ params }) {
  const file = await fs.readFile(process.cwd() + `/app/data/${params.slug[0]}.json`, "utf8");
  const data = JSON.parse(file);
  return <TestWrapper data={data} test={params.slug[0]} testIndex={Number.parseInt(params.slug[1]) - 1} />;
}
