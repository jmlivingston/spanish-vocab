"use client";
import { useContext } from "react";
import { TestContext } from "./TestContext";

function useTest() {
  const { data, setData, user } = useContext(TestContext);
  return { data, setData, user };
}

export default useTest;
