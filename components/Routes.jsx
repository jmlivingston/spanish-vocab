import { Suspense, lazy } from "react";

const TestList = lazy(() => import("./test/TestList"));
const Test1_100 = lazy(() => import("../app/test/items/Test1_100"));
const Test101_200 = lazy(() => import("../app/test/items/Test101_200"));
const Test201_300 = lazy(() => import("../app/test/items/Test201_300"));
const Test301_400 = lazy(() => import("../app/test/items/Test301_400"));
const Test401_500 = lazy(() => import("../app/test/items/Test401_500"));
const Test501_600 = lazy(() => import("../app/test/items/Test501_600"));
const Test601_700 = lazy(() => import("../app/test/items/Test601_700"));
const Test701_800 = lazy(() => import("../app/test/items/Test701_800"));
const Test801_900 = lazy(() => import("../app/test/items/Test801_900"));
const Test901_1000 = lazy(() => import("../app/test/items/Test901_1000"));
const Test1001_1100 = lazy(() => import("../app/test/items/Test1001_1100"));
const Test1101_1200 = lazy(() => import("../app/test/items/Test1101_1200"));
const Test1201_1300 = lazy(() => import("../app/test/items/Test1201_1300"));
const Test1301_1400 = lazy(() => import("../app/test/items/Test1301_1400"));
const Test1401_1500 = lazy(() => import("../app/test/items/Test1401_1500"));
const Test1501_1600 = lazy(() => import("../app/test/items/Test1501_1600"));
const Test1601_1700 = lazy(() => import("../app/test/items/Test1601_1700"));
const Test1701_1800 = lazy(() => import("../app/test/items/Test1701_1800"));
const Test1801_1900 = lazy(() => import("../app/test/items/Test1801_1900"));
const Test1901_2000 = lazy(() => import("../app/test/items/Test1901_2000"));
const Test2001_2100 = lazy(() => import("../app/test/items/Test2001_2100"));
const Test2101_2200 = lazy(() => import("../app/test/items/Test2101_2200"));
const Test2201_2300 = lazy(() => import("../app/test/items/Test2201_2300"));
const Test2301_2400 = lazy(() => import("../app/test/items/Test2301_2400"));
const Test2401_2500 = lazy(() => import("../app/test/items/Test2401_2500"));
const Test2501_2600 = lazy(() => import("../app/test/items/Test2501_2600"));
const Test2601_2700 = lazy(() => import("../app/test/items/Test2601_2700"));
const Test2701_2800 = lazy(() => import("../app/test/items/Test2701_2800"));
const Test2801_2900 = lazy(() => import("../app/test/items/Test2801_2900"));
const Test2901_3000 = lazy(() => import("../app/test/items/Test2901_3000"));
const Test3001_3100 = lazy(() => import("../app/test/items/Test3001_3100"));
const Test3101_3200 = lazy(() => import("../app/test/items/Test3101_3200"));
const Test3201_3300 = lazy(() => import("../app/test/items/Test3201_3300"));
const Test3301_3400 = lazy(() => import("../app/test/items/Test3301_3400"));
const Test3401_3500 = lazy(() => import("../app/test/items/Test3401_3500"));
const Test3501_3600 = lazy(() => import("../app/test/items/Test3501_3600"));
const Test3601_3700 = lazy(() => import("../app/test/items/Test3601_3700"));
const Test3701_3800 = lazy(() => import("../app/test/items/Test3701_3800"));
const Test3801_3900 = lazy(() => import("../app/test/items/Test3801_3900"));
const Test3901_4000 = lazy(() => import("../app/test/items/Test3901_4000"));
const Test4001_4100 = lazy(() => import("../app/test/items/Test4001_4100"));
const Test4101_4200 = lazy(() => import("../app/test/items/Test4101_4200"));
const Test4201_4300 = lazy(() => import("../app/test/items/Test4201_4300"));
const Test4301_4400 = lazy(() => import("../app/test/items/Test4301_4400"));
const Test4401_4500 = lazy(() => import("../app/test/items/Test4401_4500"));
const Test4501_4600 = lazy(() => import("../app/test/items/Test4501_4600"));
const Test4601_4700 = lazy(() => import("../app/test/items/Test4601_4700"));
const Test4701_4800 = lazy(() => import("../app/test/items/Test4701_4800"));
const Test4801_4900 = lazy(() => import("../app/test/items/Test4801_4900"));
const Test4901_5000 = lazy(() => import("../app/test/items/Test4901_5000"));

const ROUTES = [
  "/",
  "1_100",
  "1_100/review",
  "101_200",
  "101_200/review",
  "201_300",
  "201_300/review",
  "301_400",
  "301_400/review",
  "401_500",
  "401_500/review",
  "501_600",
  "501_600/review",
  "601_700",
  "601_700/review",
  "701_800",
  "701_800/review",
  "801_900",
  "801_900/review",
  "901_1000",
  "901_1000/review",
  "1001_1100",
  "1001_1100/review",
  "1101_1200",
  "1101_1200/review",
  "1201_1300",
  "1201_1300/review",
  "1301_1400",
  "1301_1400/review",
  "1401_1500",
  "1401_1500/review",
  "1501_1600",
  "1501_1600/review",
  "1601_1700",
  "1601_1700/review",
  "1701_1800",
  "1701_1800/review",
  "1801_1900",
  "1801_1900/review",
  "1901_2000",
  "1901_2000/review",
  "2001_2100",
  "2001_2100/review",
  "2101_2200",
  "2101_2200/review",
  "2201_2300",
  "2201_2300/review",
  "2301_2400",
  "2301_2400/review",
  "2401_2500",
  "2401_2500/review",
  "2501_2600",
  "2501_2600/review",
  "2601_2700",
  "2601_2700/review",
  "2701_2800",
  "2701_2800/review",
  "2801_2900",
  "2801_2900/review",
  "2901_3000",
  "2901_3000/review",
  "3001_3100",
  "3001_3100/review",
  "3101_3200",
  "3101_3200/review",
  "3201_3300",
  "3201_3300/review",
  "3301_3400",
  "3301_3400/review",
  "3401_3500",
  "3401_3500/review",
  "3501_3600",
  "3501_3600/review",
  "3601_3700",
  "3601_3700/review",
  "3701_3800",
  "3701_3800/review",
  "3801_3900",
  "3801_3900/review",
  "3901_4000",
  "3901_4000/review",
  "4001_4100",
  "4001_4100/review",
  "4101_4200",
  "4101_4200/review",
  "4201_4300",
  "4201_4300/review",
  "4301_4400",
  "4301_4400/review",
  "4401_4500",
  "4401_4500/review",
  "4501_4600",
  "4501_4600/review",
  "4601_4700",
  "4601_4700/review",
  "4701_4800",
  "4701_4800/review",
  "4801_4900",
  "4801_4900/review",
  "4901_5000",
  "4901_5000/review",
];

function Routes({ route }) {
  return (
    <Suspense>
      {(route === "/" || !ROUTES.includes(route)) && <TestList />}
      {route.startsWith("1_100") && <Test1_100 />}
      {route.startsWith("101_200") && <Test101_200 />}
      {route.startsWith("201_300") && <Test201_300 />}
      {route.startsWith("301_400") && <Test301_400 />}
      {route.startsWith("401_500") && <Test401_500 />}
      {route.startsWith("501_600") && <Test501_600 />}
      {route.startsWith("601_700") && <Test601_700 />}
      {route.startsWith("701_800") && <Test701_800 />}
      {route.startsWith("801_900") && <Test801_900 />}
      {route.startsWith("901_1000") && <Test901_1000 />}
      {route.startsWith("1001_1100") && <Test1001_1100 />}
      {route.startsWith("1101_1200") && <Test1101_1200 />}
      {route.startsWith("1201_1300") && <Test1201_1300 />}
      {route.startsWith("1301_1400") && <Test1301_1400 />}
      {route.startsWith("1401_1500") && <Test1401_1500 />}
      {route.startsWith("1501_1600") && <Test1501_1600 />}
      {route.startsWith("1601_1700") && <Test1601_1700 />}
      {route.startsWith("1701_1800") && <Test1701_1800 />}
      {route.startsWith("1801_1900") && <Test1801_1900 />}
      {route.startsWith("1901_2000") && <Test1901_2000 />}
      {route.startsWith("2001_2100") && <Test2001_2100 />}
      {route.startsWith("2101_2200") && <Test2101_2200 />}
      {route.startsWith("2201_2300") && <Test2201_2300 />}
      {route.startsWith("2301_2400") && <Test2301_2400 />}
      {route.startsWith("2401_2500") && <Test2401_2500 />}
      {route.startsWith("2501_2600") && <Test2501_2600 />}
      {route.startsWith("2601_2700") && <Test2601_2700 />}
      {route.startsWith("2701_2800") && <Test2701_2800 />}
      {route.startsWith("2801_2900") && <Test2801_2900 />}
      {route.startsWith("2901_3000") && <Test2901_3000 />}
      {route.startsWith("3001_3100") && <Test3001_3100 />}
      {route.startsWith("3101_3200") && <Test3101_3200 />}
      {route.startsWith("3201_3300") && <Test3201_3300 />}
      {route.startsWith("3301_3400") && <Test3301_3400 />}
      {route.startsWith("3401_3500") && <Test3401_3500 />}
      {route.startsWith("3501_3600") && <Test3501_3600 />}
      {route.startsWith("3601_3700") && <Test3601_3700 />}
      {route.startsWith("3701_3800") && <Test3701_3800 />}
      {route.startsWith("3801_3900") && <Test3801_3900 />}
      {route.startsWith("3901_4000") && <Test3901_4000 />}
      {route.startsWith("4001_4100") && <Test4001_4100 />}
      {route.startsWith("4101_4200") && <Test4101_4200 />}
      {route.startsWith("4201_4300") && <Test4201_4300 />}
      {route.startsWith("4301_4400") && <Test4301_4400 />}
      {route.startsWith("4401_4500") && <Test4401_4500 />}
      {route.startsWith("4501_4600") && <Test4501_4600 />}
      {route.startsWith("4601_4700") && <Test4601_4700 />}
      {route.startsWith("4701_4800") && <Test4701_4800 />}
      {route.startsWith("4801_4900") && <Test4801_4900 />}
      {route.startsWith("4901_5000") && <Test4901_5000 />}
    </Suspense>
  );
}

export default Routes;
