"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./TestWrapper.css";

function TestWrapper({ data, isReview, reviewIds = [], test, testIndex }) {
  const router = useRouter();
  const [error, setError] = useState();
  const [testAnswer, setTestAnswer] = useState();
  const [isAsking, setIsAsking] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (isReview) {
      setFilteredData(reviewIds.length > 0 ? data.filter(({ id }) => reviewIds.includes(id)) : data);
    } else {
      setFilteredData(data);
    }
  }, [data, reviewIds]);

  const { answer, id, question } = filteredData?.[testIndex] || {};

  useEffect(() => {
    (async () => {
      setError();
      if (testAnswer !== undefined) {
        try {
          const response = await fetch(`/api/test/${id}`, {
            body: JSON.stringify({ test }),
            method: testAnswer ? "PUT" : "DELETE",
          });
          if (response.ok) {
            if (!testAnswer && previousIndex === nextIndex) {
              router.push("/");
            } else {
              router.push(`/test/${test}/${nextIndex + 1}`);
            }
          } else {
            const json = await response.json();
            throw new Error({ json, response });
          }
        } catch (error) {
          setError(error.message);
        }
      }
    })();
  }, [testAnswer]);

  let nextIndex;
  let previousIndex;
  if (filteredData?.length > 0) {
    const isFirst = 0 === testIndex;
    const isLast = filteredData.length - 1 === testIndex;
    if (isFirst && isLast) {
      nextIndex = testIndex;
      previousIndex = testIndex;
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
  }

  return filteredData?.length > 0 ? (
    <div className="test-container">
      <>
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
        {error ? (
          <main className="error">Error: {error}</main>
        ) : (
          <>
            <main className="content">
              <div>{question}</div>
              <div>{!isAsking ? answer : <>&nbsp;</>}</div>
            </main>
            <footer>
              {isAsking && <button onClick={() => setIsAsking(false)}>Check</button>}
              {!isAsking && <button onClick={() => setTestAnswer(true)}>YES</button>}
              {!isAsking && <button onClick={() => setTestAnswer(false)}>NO</button>}
            </footer>
          </>
        )}
      </>
    </div>
  ) : null;
}

export default TestWrapper;
