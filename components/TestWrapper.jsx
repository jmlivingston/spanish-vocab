"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./TestWrapper.css";

function TestWrapper({ data, isReview, test, testIndex }) {
  const router = useRouter();
  const [isAsking, setIsAsking] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const reviewIds = []; // TODO: get from storage
    setFilteredData(isReview ? data.filter(({ id }) => (reviewIds.length > 0 ? reviewIds.includes(id) : true)) : data);
  }, []);

  const isFirst = 0 === testIndex;
  const isLast = filteredData.length - 1 === testIndex;
  let nextIndex;
  let previousIndex;
  if (isFirst && isLast) {
    nextIndex = index;
    previousIndex = index;
  } else if (isFirst) {
    nextIndex = testIndex + 1;
    previousIndex = filteredData.length - 1;
  } else if (isLast) {
    nextIndex = 0;
    previousIndex = testIndex - 1;
  } else {
    nextIndex = testIndex + 1;
    previousIndex = testIndex - 1;
  }

  const { answer, id, question } = filteredData?.[testIndex] || {};

  const onAnswer = (isYes) => {
    // const storageData = localStorage.getItem(STORAGE_KEY);
    // const storage = storageData ? JSON.parse(storageData) : {};
    // if (!storage?.[pathName]) {
    //   storage[pathName] = [];
    // }
    // if (isYes) {
    //   storage[pathName] = storage[pathName].filter((itemId) => id !== itemId);
    // } else {
    //   storage[pathName].push(id);
    //   storage[pathName] = [...new Set(storage[pathName])];
    // }
    // localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
    router.push(`/test/${test}/${nextIndex + 1}`);
  };

  return filteredData.length > 0 ? (
    <div className="test-container">
      <header>
        <Link href={`/test/${test}/${previousIndex + 1}`}>
          <button>Previous</button>
        </Link>
        <Link href={`/test/${test}/${nextIndex + 1}`}>
          <button>Next</button>
        </Link>
        <Link href="/">
          <button>Cancel</button>
        </Link>
        <div>
          {testIndex + 1} of {filteredData.length}
        </div>
      </header>
      <main className="content">
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
