import { createContext, useEffect, useMemo } from "react";
import useLocalStorage from "./useLocalStorage";

const TestContext = createContext({});

function TestContextProvider({ children }) {
  const [data, setData] = useLocalStorage({ key: "spanish-vocab" }, {});

  useEffect(() => {
    (async () => {
      const response = await fetch("/api/test");
      const json = await response.json();
      setData(json);
    })();
  }, []);

  const value = useMemo(() => {
    return {
      data: data?.data,
      setData,
      user: data?.user,
    };
  }, [data, setData]);

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
}

export { TestContext, TestContextProvider };
