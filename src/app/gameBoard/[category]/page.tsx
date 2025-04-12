"use client";

import { useParams } from "next/navigation";
import words from "../../../constants/words.json";
import CountDown from "@/components/CountDown";
import { useState } from "react";

const gameBoard = () => {
  const params = useParams();
  const category = params?.category as string;
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const normalizeCategory = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]/gi, "");

  const currentCategory = Object.keys(words.categories).find(
    (key) => normalizeCategory(key) === category
  ) as keyof typeof words.categories | undefined;

  const questions = currentCategory ? words.categories[currentCategory] : [];

  const question = questions.find((item, index) => index === currentQuestion);

  return (
    <div className="flex h-screen justify-center items-center drop-shadow-[0_4px_4px_yellow]">
      <div
        className="gameBoard-border flex flex-col items-center justify-between p-5 w-3/4 h-128 
"
      >
        <div>
          <h1 className="neon-text text-2xl font-bold cursor-pointer">
            {currentCategory}
          </h1>
        </div>
        <div>
          {question && (
            <ul>
              <li>{question.word}</li>
            </ul>
          )}
        </div>
        <div>
          <form>
            <label htmlFor="">
              <input type="radio" /> {question && <p>{question.correct}</p>}
            </label>
            <input type="radio" />
            <label htmlFor=""></label>
          </form>
        </div>
        <div>
          <CountDown />
        </div>
      </div>
    </div>
  );
};

export default gameBoard;
