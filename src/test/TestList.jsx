import "./TestList.css";

const TEST_COUNT = 5000;
const splitAmount = 100;
const splitCount = TEST_COUNT / splitAmount;

function TestList() {
  return (
    <div className='test-list'>
      {[...new Array(splitCount)].map((_, index) => {
        const start = index * splitAmount;
        const end = index * splitAmount + splitAmount;
        return (
          <button
            key={index}
            onClick={() =>
              window.history.pushState(
                { route: `${start + 1}_${end}` },
                undefined,
                `${start + 1}_${end}`
              )
            }
          >{`${start + 1}-${end}`}</button>
        );
      })}
    </div>
  );
}

export default TestList;
