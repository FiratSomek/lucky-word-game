"use client";

import { useEffect, useState } from "react";

const useCountdown = (start: number) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (count <= 0) return;

    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  const reset = () => setCount(start);

  return { count, reset };
};

export default useCountdown;
