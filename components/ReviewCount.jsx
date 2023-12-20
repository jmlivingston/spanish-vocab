import { getReviewIds } from "../helpers";

async function ReviewCount({ test }) {
  const reviewCount = (await getReviewIds({ test })).length;
  return (
    <button className="contrast" disabled={reviewCount === 0}>
      R-{reviewCount}
    </button>
  );
}

export default ReviewCount;
