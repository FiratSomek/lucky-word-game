"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type Props = {
  to: string;
};

const CountdownRedirect = ({ to }: Props) => {
  const [count, setCount] = useState(3);
  const router = useRouter();

  useEffect(() => {
    if (count === 0) {
      router.push(to);
      return;
    }
    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, to, router]);

  return <div>{count > 0 ? `${count}` : "Redirecting..."}</div>;
};

export default CountdownRedirect;
