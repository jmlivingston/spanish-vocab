import { useState } from "react";
import "./TestWrapper.css";

function TestWrapper({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAsking, setIsAsking] = useState(true);
  const { answer, question } = data[activeIndex];

  const getIndexes = () => {
    const isFirst = 0 === activeIndex;
    const isLast = data.length - 1 === activeIndex;
    let nextIndex;
    let previousIndex;
    if (isFirst && isLast) {
      nextIndex = index;
      previousIndex = index;
    } else if (isFirst) {
      nextIndex = activeIndex + 1;
      previousIndex = data.length - 1;
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
    if (!isYes) {
      // save to local storage
    }
    setActiveIndex(getIndexes().nextIndex);
    setIsAsking(true);
  };

  return (
    <div className='test-container'>
      <header>
        <button onClick={() => setActiveIndex(getIndexes().previousIndex)}>
          Previous
        </button>
        <button onClick={() => setActiveIndex(getIndexes().nextIndex)}>
          Next
        </button>
        <button>Cancel</button>
        <div>
          {activeIndex + 1} of {data.length}
        </div>
      </header>
      <main className='content'>
        <div>{question}</div>
        <div>{!isAsking ? answer : <>&nbsp;</>}</div>
      </main>
      <footer>
        {isAsking && <button onClick={() => setIsAsking(false)}>Check</button>}
        {!isAsking && <button onClick={() => onAnswer(true)}>YES</button>}
        {!isAsking && <button onClick={() => onAnswer(true)}>NO</button>}
      </footer>
    </div>
  );
}

export default TestWrapper;
