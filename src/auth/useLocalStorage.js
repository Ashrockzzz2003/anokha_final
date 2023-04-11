import { useState, useEffect } from "react";
import  secureLocalStorage  from  "react-secure-storage";

function getStorageValue(key, defaultValue) {
  // getting stored value
  const saved = secureLocalStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    secureLocalStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};