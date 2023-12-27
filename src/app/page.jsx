import dynamic from "next/dynamic";
import Link from "next/link";
import TEST_GROUPS from "../TEST_GROUPS";
import "./Home.css";

const ReviewCount = dynamic(() => import("../components/ReviewCount"), {
  loading: () => <p>Loading...</p>,
});

export default async function Home() {
  return (
    <div className="test-list">
      {TEST_GROUPS.map(({ start, end, testGroupId }) => {
        return (
          <div key={testGroupId}>
            {`${start}-${end}`}
            <div>
              <Link href={`/test/${testGroupId}/${start}`}>
                <button>All</button>
              </Link>
              <ReviewCount testGroupId={testGroupId} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
