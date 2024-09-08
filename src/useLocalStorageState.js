import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  // keeping key as an argument here to make it reusable
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(localStorage.getItem(key)) : initialState;
  });

  // Adding functionality - storing the watched movies data in the local storage
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
