"use client";
import useCountdown from "@/hooks/useCountDown";
import React from "react";

const CountDown = () => {
  const count = useCountdown(10);
  return <div>{count > 0 ? `${count}` : "Time is up!"}</div>;
};

export default CountDown;
