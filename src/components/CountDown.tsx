"use client";
import useCountdown from "@/hooks/useCountDown";
import React from "react";

const CountDown = () => {
  const count = useCountdown(10);

  return (
    <div
      className={`font-bold text-2xl ${
        count >= 4 ? "text-green-500" : "text-red-500 text-3xl"
      }`}
    >
      {count > 0 ? `${count}` : "Time is up!"}
    </div>
  );
};

export default CountDown;
