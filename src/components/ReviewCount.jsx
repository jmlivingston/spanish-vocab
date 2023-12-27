"use client";
import Link from "next/link";
import useTest from "./useTest";

function ReviewCount({ testGroupId }) {
  const { data } = useTest();
  const reviewCount = data?.[testGroupId]?.length || 0;
  return data ? (
    <Link href={`/review/${testGroupId}/${data?.[testGroupId]?.[0]}`}>
      <button className="contrast" disabled={reviewCount === 0}>
        R-{reviewCount}
      </button>
    </Link>
  ) : null;
}

export default ReviewCount;
