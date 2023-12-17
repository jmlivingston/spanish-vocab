import { Suspense, lazy } from "react";

const TestList = lazy(() => import("./test/TestList"));
const Test1_100 = lazy(() => import("./test/items/Test1_100"));

function Routes({ route }) {
  return (
    <Suspense>
      {route === "/" && <TestList />}
      {route === "1-100" && <Test1_100 />}
    </Suspense>
  );
}

export default Routes;
