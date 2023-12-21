"use client";
import Link from "next/link";
import useTest from "./useTest";

function ReviewLink({ testGroupId }) {
  const { data } = useTest();
  const reviewCount = data?.[testGroupId]?.length || 0;
  return (
    <Link href={`/review/${testGroupId}/${data?.[testGroupId]?.[0]}`}>
      <button className="contrast" disabled={reviewCount === 0}>
        R-{reviewCount}
      </button>
    </Link>
  );
}

export default ReviewLink;
