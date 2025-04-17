"use client";
import React, { useEffect, useMemo, useState } from "react";
import { normalizeCategory } from "@/app/utils/normalize";
import CountDown from "./CountDown";
import useCountdown from "@/hooks/useCountDown";

type QuestionType = {
  word: string;
  correct: string;
  incorrect: string;
};
type Props = {
  question: QuestionType;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  currentQuestionIndex: number;
};

const QuestionComponent = ({
  question,
  setCurrentQuestionIndex,
  currentQuestionIndex,
}: Props) => {
  const [selected, setSelected] = useState("");
  const count = useCountdown(10);

  const options = [
    { label: "Doğru Cevap", value: "correct", text: question.correct },
    { label: "Yanlış Cevap", value: "incorrect", text: question.incorrect },
  ];

  const shuffledOprions = useMemo(
    () => [...options].sort(() => Math.random() - 0.5),
    [question]
  );

  useEffect(() => {
    if (selected || count === 0) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelected("");
      }, 1500);
    }
  }, [selected]);
  return (
    <div className="flex flex-col items-center ">
      <div className=" neon-text text-lg font-bold m-10">
        {question && <h1>{question.word}</h1>}
      </div>
      <div>
        <form className="flex flex-col text-lg m-10">
          {shuffledOprions.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name="answer"
                value={option.value}
                checked={selected === option.value}
                onChange={(e) => setSelected(e.target.value)}
              />
              {option.text}
            </label>
          ))}
        </form>
      </div>
      <div className="m-10">
        <CountDown count={count} />
      </div>
    </div>
  );
};

export default QuestionComponent;
