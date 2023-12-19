import { STORAGE_KEY } from "../CONSTANTS";
import "./TestList.css";

const TEST_COUNT = 5000;
const splitAmount = 100;
const splitCount = TEST_COUNT / splitAmount;

function TestList() {
  const storageData = localStorage.getItem(STORAGE_KEY);
  const storage = storageData ? JSON.parse(storageData) : {};

  return (
    <div className='test-list'>
      {[...new Array(splitCount)].map((_, index) => {
        const start = index * splitAmount;
        const end = index * splitAmount + splitAmount;
        const route = `${start + 1}_${end}`;
        const reviewRoute = `${route}/review`;
        const reviewCount = storage?.[route]?.length || 0;
        return (
          <div key={index}>
            {`${start + 1}-${end}`}
            <div>
              <button
                onClick={() =>
                  window.history.pushState({ route }, undefined, route)
                }
              >
                All
              </button>
              <button
                className='contrast'
                disabled={reviewCount === 0}
                onClick={() =>
                  window.history.pushState(
                    { route: reviewRoute },
                    undefined,
                    reviewRoute
                  )
                }
              >
                R-{reviewCount}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TestList;
