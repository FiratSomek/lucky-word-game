"use client";
import React, { useEffect, useMemo, useState } from "react";
import { normalizeCategory } from "@/app/utils/normalize";

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
  console.log(selected);
  const options = [
    { label: "Doğru Cevap", value: "correct", text: question.correct },
    { label: "Yanlış Cevap", value: "incorrect", text: question.incorrect },
  ];

  const shuffledOprions = useMemo(
    () => [...options].sort(() => Math.random() - 0.5),
    [question]
  );

  useEffect(() => {
    if (selected) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelected("");
      }, 1500);
    }
  }, [selected]);
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="mb-20 neon-text text-lg font-bold">
        {question && <h1>{question.word}</h1>}
      </div>
      <div>
        <form className="flex flex-col text-lg justify-start">
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
    </div>
  );
};

export default QuestionComponent;
