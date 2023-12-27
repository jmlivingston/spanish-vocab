"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import "./TestWrapper.css";
import useTest from "./useTest";

function TestWrapper({ isReview, testGroupData, testGroupId, testId }) {
  const { data, setData, user } = useTest();
  const reviewIds = useMemo(() => data?.[testGroupId] || [], [data, testGroupId]);
  const router = useRouter();
  const [error, setError] = useState();
  const [isComplete, setIsComplete] = useState(false);
  const [testAnswer, setTestAnswer] = useState();
  const [isAsking, setIsAsking] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const link = isReview ? "review" : "test";
  let nextId;
  let previousId;
  let isFirst;
  let isLast;
  let currentIndex;

  useEffect(() => {
    if (isReview) {
      setFilteredData(reviewIds.length > 0 ? testGroupData.filter(({ id }) => reviewIds.includes(id)) : testGroupData);
    } else {
      setFilteredData(testGroupData);
    }
  }, [isReview]);

  useEffect(() => {
    (async () => {
      if (isComplete) {
        const response = await fetch("/api/test", { method: "PUT", body: JSON.stringify({ data, user }) });
        if (response.ok) {
          router.push("/");
        } else {
          setError("Problem setting test data");
        }
      }
    })();
  }, [data, router, user, isComplete]);

  const { answer, answerDetails, id, question, questionDetails } = filteredData?.find(({ id }) => id === testId) || {};

  useEffect(() => {
    (async () => {
      setError();
      if (testAnswer !== undefined) {
        try {
          const newData = {
            ...data,
            [testGroupId]: testAnswer ? reviewIds.filter((datum) => datum !== id) : [...new Set([...reviewIds, id])],
          };
          setData(newData);
          if (previousId === nextId) {
            setIsComplete(true);
          } else {
            router.push(`/${link}/${testGroupId}/${nextId}`);
          }
        } catch (error) {
          setError(error.message);
        }
      }
    })();
  }, [testAnswer]);

  if (filteredData?.length > 0) {
    currentIndex = filteredData.findIndex(({ id }) => id === testId);
    isFirst = 0 === currentIndex;
    isLast = filteredData[filteredData.length - 1].id === testId;
    if (isFirst && isLast) {
      nextId = testId;
      previousId = testId;
    } else if (isFirst) {
      nextId = filteredData[currentIndex + 1].id;
      previousId = filteredData[filteredData.length - 1].id;
    } else if (isLast) {
      nextId = filteredData[0].id;
      previousId = testId - 1;
    } else {
      nextId = filteredData[currentIndex + 1].id;
      previousId = filteredData[currentIndex - 1].id;
    }
  }

  return filteredData?.length > 0 ? (
    <div className="test-container">
      <>
        <header>
          <Link href={`/${link}/${testGroupId}/${previousId}`}>
            <button>Previous</button>
          </Link>
          <Link href={`/${link}/${testGroupId}/${nextId}`}>
            <button>Next</button>
          </Link>
          <button onClick={() => setIsComplete(true)}>Cancel</button>
          <div>
            {currentIndex + 1} of {filteredData.length}
          </div>
        </header>
        {error ? (
          <main className="error">Error: {error}</main>
        ) : (
          <>
            <main className="content">
              <div>{question}</div>
              <div>{!isAsking ? answer : <>&nbsp;</>}</div>
              <div className="details">
                {!isAsking ? (
                  <>
                    <div>{questionDetails}</div>
                    <hr />
                    <div>{answerDetails}</div>
                  </>
                ) : (
                  <>&nbsp;</>
                )}
              </div>
            </main>
            <footer>
              {isAsking && <button onClick={() => setIsAsking(false)}>CHECK</button>}
              {!isAsking && (
                <button className="yes" onClick={() => setTestAnswer(true)}>
                  YES
                </button>
              )}
              {!isAsking && (
                <button className="no" onClick={() => setTestAnswer(false)}>
                  NO
                </button>
              )}
            </footer>
          </>
        )}
      </>
    </div>
  ) : null;
}

export default TestWrapper;
