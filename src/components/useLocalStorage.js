"use client";
import { useState } from "react";

const STORAGE_TYPES = Object.freeze({
  localStorage: "localStorage",
  sessionStorage: "sessionStorage",
});

const useLocalStorage = ({ key, initialValue, storageType = STORAGE_TYPES.localStorage }) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window[storageType].getItem(key);
      const returnItem = item ? JSON.parse(item) : initialValue;
      if (typeof window !== "undefined") {
        window[storageType].setItem(key, JSON.stringify(returnItem));
      }
      return returnItem;
    } catch (error) {
      console.log("useLocalStorage - useState", error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window[storageType].setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log("useLocalStorage - setValue", error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;

export { STORAGE_TYPES };
