import fs from "fs";
import path from "path";

const CORE_DATA = "./data";
const FE_DATA_PATH = "./src/data";

const splitAmount = 100;

const data = JSON.parse(fs.readFileSync(path.join(CORE_DATA, "data.json")));

if (fs.existsSync(FE_DATA_PATH)) {
  fs.rmdirSync(FE_DATA_PATH, { recursive: true });
}
fs.mkdirSync(FE_DATA_PATH);

const splitCount = data.length / splitAmount;

const imports = [];
const routes = ["/"];
const declarations = [];

for (let i = 0; i < splitCount; i++) {
  const start = i * splitAmount;
  const end = i * splitAmount + splitAmount;
  const newData = data.slice(start, end);
  const route = `${start + 1}_${end}`;
  const fileName = `Test${route}`;

  imports.push(
    `const ${fileName} = lazy(() => import("./test/items/${fileName}"));`
  );
  routes.push(route);
  routes.push(`${route}/review`);
  declarations.push(`      {route.startsWith("${route}") && <${fileName} />}`);

  const TestItem = `import data from "../../data/${route}.json";
  import TestWrapper from "../TestWrapper";
  
  function ${fileName}() {
    return <TestWrapper data={data} />;
  }
  
  export default ${fileName};
  `;

  fs.writeFileSync("./src/test/items/" + fileName + ".jsx", TestItem);

  fs.writeFileSync(
    path.join(FE_DATA_PATH, `${route}.json`),
    JSON.stringify(newData, null, 2)
  );
}

const RoutesJSX = `import { Suspense, lazy } from "react";

const TestList = lazy(() => import("./test/TestList"));
${imports.join("\n")}

const ROUTES = ${JSON.stringify(routes)};

function Routes({ route }) {
  return (
    <Suspense>
      {(route === "/" || !ROUTES.includes(route)) && <TestList />}
${declarations.join("\n")}
    </Suspense>
  );
}

export default Routes;
`;

fs.writeFileSync("./src/Routes.jsx", RoutesJSX);
