import { unstable_noStore } from "next/cache";
import dynamic from "next/dynamic";
import Link from "next/link";
import "./Home.css";

const ReviewLink = dynamic(() => import("../components/ReviewCount"), { ssr: false });

// export const dynamic = "force-dynamic";

const TEST_COUNT = 5000;
const splitAmount = 100;
const splitCount = TEST_COUNT / splitAmount;

export default async function Home() {
  unstable_noStore();
  return (
    <div className="test-list">
      {[...new Array(splitCount)].map((_, index) => {
        const start = index * splitAmount;
        const end = index * splitAmount + splitAmount;
        const testGroupId = `${start + 1}_${end}`;
        return (
          <div key={index}>
            {`${start + 1}-${end}`}
            <div>
              <Link href={`/test/${testGroupId}/${start + 1}`}>
                <button>All</button>
              </Link>
              <ReviewLink testGroupId={testGroupId} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
