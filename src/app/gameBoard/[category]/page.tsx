"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";
import words from "../../../constants/words.json";

const gameBoard = () => {
  const params = useParams();
  const currentCategory = params?.category as string;
  const [questionsByCategory, setQuestionsByCategory] = useState([]);

  return (
    <div className="flex h-screen justify-center items-center drop-shadow-[0_4px_4px_yellow]">
      <div
        className="gameBoard-border flex flex-col items-center w-3/4 h-128 
"
      >
        <div>
          <h1 className="neon-text text-2xl font-bold">{currentCategory}</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default gameBoard;
