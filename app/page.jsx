import Link from "next/link";
import ReviewCount from "../components/ReviewCount";
import "./Home.css";

export const dynamic = "force-dynamic";

const TEST_COUNT = 5000;
const splitAmount = 100;
const splitCount = TEST_COUNT / splitAmount;

export default async function Home() {
  return (
    <div className="test-list">
      {[...new Array(splitCount)].map((_, index) => {
        const start = index * splitAmount;
        const end = index * splitAmount + splitAmount;
        const test = `${start + 1}_${end}`;
        return (
          <div key={index}>
            {`${start + 1}-${end}`}
            <div>
              <Link href={`/test/${test}/1`}>
                <button>All</button>
              </Link>
              <Link href={`/review/${test}/1`}>
                <ReviewCount test={test} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
