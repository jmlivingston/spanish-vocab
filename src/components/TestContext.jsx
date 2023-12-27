"use client";
import { createContext, useMemo } from "react";
import useLocalStorage from "./useLocalStorage";

const TestContext = createContext({});

function TestContextProvider({ children, initialData, user }) {
  const [data, setData] = useLocalStorage({ key: "spanish-vocab", initialValue: initialData });
  const value = useMemo(() => {
    return {
      data,
      setData,
      user,
    };
  }, [data, setData, user]);

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
}

export { TestContext, TestContextProvider };
