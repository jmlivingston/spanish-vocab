import { useEffect, useState } from "react";
import { STORAGE_KEY } from "../CONSTANTS";
import "./TestWrapper.css";

const pathName = location.pathname.split("/")[1];
const isReview = location.pathname.split("/")?.[2] === "review";

function TestWrapper({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAsking, setIsAsking] = useState(true);
  const [filteredData, setFilteredData] = useState({});

  useEffect(() => {
    const storageData = localStorage.getItem(STORAGE_KEY);
    const storage = storageData ? JSON.parse(storageData) : {};
    const reviewIds = storage?.[pathName] || [];

    setFilteredData(
      isReview
        ? data.filter(({ id }) =>
            reviewIds.length > 0 ? reviewIds.includes(id) : true
          )
        : data
    );
  }, []);

  const getIndexes = () => {
    const isFirst = 0 === activeIndex;
    const isLast = filteredData.length - 1 === activeIndex;
    let nextIndex;
    let previousIndex;
    if (isFirst && isLast) {
      nextIndex = index;
      previousIndex = index;
    } else if (isFirst) {
      nextIndex = activeIndex + 1;
      previousIndex = filteredData.length - 1;
    } else if (isLast) {
      nextIndex = 0;
      previousIndex = activeIndex - 1;
    } else {
      nextIndex = activeIndex + 1;
      previousIndex = activeIndex - 1;
    }
    return { nextIndex, previousIndex };
  };

  const onAnswer = (isYes) => {
    const storageData = localStorage.getItem(STORAGE_KEY);
    const storage = storageData ? JSON.parse(storageData) : {};
    if (!storage?.[pathName]) {
      storage[pathName] = [];
    }
    if (isYes) {
      storage[pathName] = storage[pathName].filter((itemId) => id !== itemId);
    } else {
      storage[pathName].push(id);
      storage[pathName] = [...new Set(storage[pathName])];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
    setActiveIndex(getIndexes().nextIndex);
    setIsAsking(true);
  };

  const { answer, id, question } = filteredData?.[activeIndex] || {};

  return filteredData.length > 0 ? (
    <div className='test-container'>
      <header>
        <button onClick={() => setActiveIndex(getIndexes().previousIndex)}>
          Previous
        </button>
        <button onClick={() => setActiveIndex(getIndexes().nextIndex)}>
          Next
        </button>
        <button
          onClick={() =>
            window.history.pushState({ route: "/" }, undefined, "/")
          }
        >
          Cancel
        </button>
        <div>
          {activeIndex + 1} of {filteredData.length}
        </div>
      </header>
      <main className='content'>
        <div>{question}</div>
        <div>{!isAsking ? answer : <>&nbsp;</>}</div>
      </main>
      <footer>
        {isAsking && <button onClick={() => setIsAsking(false)}>Check</button>}
        {!isAsking && <button onClick={() => onAnswer(true)}>YES</button>}
        {!isAsking && <button onClick={() => onAnswer(false)}>NO</button>}
      </footer>
    </div>
  ) : null;
}

export default TestWrapper;
