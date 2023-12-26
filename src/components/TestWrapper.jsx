// TODO: Not sure testId will work for review correctly
"use client";
import { parseAsBoolean, parseAsInteger, useQueryState } from "next-usequerystate";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import "./TestWrapper.css";
import useTest from "./useTest";

function TestWrapper({ testGroupData, testGroupId }) {
  const [testId, setTestId] = useQueryState("testId", parseAsInteger);
  const [isReview] = useQueryState("isReview", parseAsBoolean);
  const { data, setData, user } = useTest();
  const reviewIds = useMemo(() => data?.[testGroupId] || [], [data, testGroupId]);
  const router = useRouter();
  const [error, setError] = useState();
  const [isComplete, setIsComplete] = useState(false);
  const [testAnswer, setTestAnswer] = useState();
  const [isAsking, setIsAsking] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const link = isReview ? "review" : "test";

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
        if (data) {
          const response = await fetch("/api/test", { method: "PUT", body: JSON.stringify({ data, user }) });
          if (response.ok) {
            router.push("/");
          } else {
            setError("Problem setting test data");
          }
        } else {
          router.push("/");
        }
      }
    })();
  }, [data, router, user, isComplete]);

  const { answer, id, question } = filteredData?.find(({ id }) => id === testId) || {};

  let nextId;
  let previousId;
  let isFirst;
  let isLast;
  let currentIndex;

  const onLink = ({ event, id }) => {
    event?.preventDefault();
    setTestId(id.toString());
  };

  useEffect(() => {
    (async () => {
      setError();
      if (testAnswer !== undefined) {
        try {
          const newData = {
            ...data,
            [testGroupId]: testAnswer ? reviewIds.filter((datum) => datum !== id) : [...new Set([...reviewIds, id])],
          };
          setIsAsking(true);
          setTestAnswer();
          setData(newData);
          if (previousId === nextId) {
            setIsComplete(true);
          } else {
            onLink({ id: nextId + 1 });
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
      nextId = testId + 1;
      previousId = testId - 1;
    }
  }

  return filteredData?.length > 0 ? (
    <div className="test-container">
      <>
        <header>
          <button onClick={(event) => onLink({ event, id: previousId })}>Previous</button>
          <button onClick={(event) => onLink({ event, id: nextId })}>Next</button>
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
