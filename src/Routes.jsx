import { Suspense, lazy } from "react";

const TestList = lazy(() => import("./test/TestList"));
const Test1_100 = lazy(() => import("./test/items/Test1_100"));
const Test101_200 = lazy(() => import("./test/items/Test101_200"));
const Test201_300 = lazy(() => import("./test/items/Test201_300"));
const Test301_400 = lazy(() => import("./test/items/Test301_400"));
const Test401_500 = lazy(() => import("./test/items/Test401_500"));
const Test501_600 = lazy(() => import("./test/items/Test501_600"));
const Test601_700 = lazy(() => import("./test/items/Test601_700"));
const Test701_800 = lazy(() => import("./test/items/Test701_800"));
const Test801_900 = lazy(() => import("./test/items/Test801_900"));
const Test901_1000 = lazy(() => import("./test/items/Test901_1000"));
const Test1001_1100 = lazy(() => import("./test/items/Test1001_1100"));
const Test1101_1200 = lazy(() => import("./test/items/Test1101_1200"));
const Test1201_1300 = lazy(() => import("./test/items/Test1201_1300"));
const Test1301_1400 = lazy(() => import("./test/items/Test1301_1400"));
const Test1401_1500 = lazy(() => import("./test/items/Test1401_1500"));
const Test1501_1600 = lazy(() => import("./test/items/Test1501_1600"));
const Test1601_1700 = lazy(() => import("./test/items/Test1601_1700"));
const Test1701_1800 = lazy(() => import("./test/items/Test1701_1800"));
const Test1801_1900 = lazy(() => import("./test/items/Test1801_1900"));
const Test1901_2000 = lazy(() => import("./test/items/Test1901_2000"));
const Test2001_2100 = lazy(() => import("./test/items/Test2001_2100"));
const Test2101_2200 = lazy(() => import("./test/items/Test2101_2200"));
const Test2201_2300 = lazy(() => import("./test/items/Test2201_2300"));
const Test2301_2400 = lazy(() => import("./test/items/Test2301_2400"));
const Test2401_2500 = lazy(() => import("./test/items/Test2401_2500"));
const Test2501_2600 = lazy(() => import("./test/items/Test2501_2600"));
const Test2601_2700 = lazy(() => import("./test/items/Test2601_2700"));
const Test2701_2800 = lazy(() => import("./test/items/Test2701_2800"));
const Test2801_2900 = lazy(() => import("./test/items/Test2801_2900"));
const Test2901_3000 = lazy(() => import("./test/items/Test2901_3000"));
const Test3001_3100 = lazy(() => import("./test/items/Test3001_3100"));
const Test3101_3200 = lazy(() => import("./test/items/Test3101_3200"));
const Test3201_3300 = lazy(() => import("./test/items/Test3201_3300"));
const Test3301_3400 = lazy(() => import("./test/items/Test3301_3400"));
const Test3401_3500 = lazy(() => import("./test/items/Test3401_3500"));
const Test3501_3600 = lazy(() => import("./test/items/Test3501_3600"));
const Test3601_3700 = lazy(() => import("./test/items/Test3601_3700"));
const Test3701_3800 = lazy(() => import("./test/items/Test3701_3800"));
const Test3801_3900 = lazy(() => import("./test/items/Test3801_3900"));
const Test3901_4000 = lazy(() => import("./test/items/Test3901_4000"));
const Test4001_4100 = lazy(() => import("./test/items/Test4001_4100"));
const Test4101_4200 = lazy(() => import("./test/items/Test4101_4200"));
const Test4201_4300 = lazy(() => import("./test/items/Test4201_4300"));
const Test4301_4400 = lazy(() => import("./test/items/Test4301_4400"));
const Test4401_4500 = lazy(() => import("./test/items/Test4401_4500"));
const Test4501_4600 = lazy(() => import("./test/items/Test4501_4600"));
const Test4601_4700 = lazy(() => import("./test/items/Test4601_4700"));
const Test4701_4800 = lazy(() => import("./test/items/Test4701_4800"));
const Test4801_4900 = lazy(() => import("./test/items/Test4801_4900"));
const Test4901_5000 = lazy(() => import("./test/items/Test4901_5000"));

const ROUTES = [
  "/",
  "1_100",
  "101_200",
  "201_300",
  "301_400",
  "401_500",
  "501_600",
  "601_700",
  "701_800",
  "801_900",
  "901_1000",
  "1001_1100",
  "1101_1200",
  "1201_1300",
  "1301_1400",
  "1401_1500",
  "1501_1600",
  "1601_1700",
  "1701_1800",
  "1801_1900",
  "1901_2000",
  "2001_2100",
  "2101_2200",
  "2201_2300",
  "2301_2400",
  "2401_2500",
  "2501_2600",
  "2601_2700",
  "2701_2800",
  "2801_2900",
  "2901_3000",
  "3001_3100",
  "3101_3200",
  "3201_3300",
  "3301_3400",
  "3401_3500",
  "3501_3600",
  "3601_3700",
  "3701_3800",
  "3801_3900",
  "3901_4000",
  "4001_4100",
  "4101_4200",
  "4201_4300",
  "4301_4400",
  "4401_4500",
  "4501_4600",
  "4601_4700",
  "4701_4800",
  "4801_4900",
  "4901_5000",
];

function Routes({ route }) {
  return (
    <Suspense>
      {(route === "/" || !ROUTES.includes(route)) && <TestList />}
      {route === "1_100" && <Test1_100 />}
      {route === "101_200" && <Test101_200 />}
      {route === "201_300" && <Test201_300 />}
      {route === "301_400" && <Test301_400 />}
      {route === "401_500" && <Test401_500 />}
      {route === "501_600" && <Test501_600 />}
      {route === "601_700" && <Test601_700 />}
      {route === "701_800" && <Test701_800 />}
      {route === "801_900" && <Test801_900 />}
      {route === "901_1000" && <Test901_1000 />}
      {route === "1001_1100" && <Test1001_1100 />}
      {route === "1101_1200" && <Test1101_1200 />}
      {route === "1201_1300" && <Test1201_1300 />}
      {route === "1301_1400" && <Test1301_1400 />}
      {route === "1401_1500" && <Test1401_1500 />}
      {route === "1501_1600" && <Test1501_1600 />}
      {route === "1601_1700" && <Test1601_1700 />}
      {route === "1701_1800" && <Test1701_1800 />}
      {route === "1801_1900" && <Test1801_1900 />}
      {route === "1901_2000" && <Test1901_2000 />}
      {route === "2001_2100" && <Test2001_2100 />}
      {route === "2101_2200" && <Test2101_2200 />}
      {route === "2201_2300" && <Test2201_2300 />}
      {route === "2301_2400" && <Test2301_2400 />}
      {route === "2401_2500" && <Test2401_2500 />}
      {route === "2501_2600" && <Test2501_2600 />}
      {route === "2601_2700" && <Test2601_2700 />}
      {route === "2701_2800" && <Test2701_2800 />}
      {route === "2801_2900" && <Test2801_2900 />}
      {route === "2901_3000" && <Test2901_3000 />}
      {route === "3001_3100" && <Test3001_3100 />}
      {route === "3101_3200" && <Test3101_3200 />}
      {route === "3201_3300" && <Test3201_3300 />}
      {route === "3301_3400" && <Test3301_3400 />}
      {route === "3401_3500" && <Test3401_3500 />}
      {route === "3501_3600" && <Test3501_3600 />}
      {route === "3601_3700" && <Test3601_3700 />}
      {route === "3701_3800" && <Test3701_3800 />}
      {route === "3801_3900" && <Test3801_3900 />}
      {route === "3901_4000" && <Test3901_4000 />}
      {route === "4001_4100" && <Test4001_4100 />}
      {route === "4101_4200" && <Test4101_4200 />}
      {route === "4201_4300" && <Test4201_4300 />}
      {route === "4301_4400" && <Test4301_4400 />}
      {route === "4401_4500" && <Test4401_4500 />}
      {route === "4501_4600" && <Test4501_4600 />}
      {route === "4601_4700" && <Test4601_4700 />}
      {route === "4701_4800" && <Test4701_4800 />}
      {route === "4801_4900" && <Test4801_4900 />}
      {route === "4901_5000" && <Test4901_5000 />}
    </Suspense>
  );
}

export default Routes;
