"use client";
import React, { useEffect, useMemo, useState } from "react";
import { normalizeCategory } from "@/app/utils/normalize";
import CountDown from "./CountDown";
import useCountdown from "@/hooks/useCountDown";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/app/QuizContext/QuizProvider";

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
  const { count, reset } = useCountdown(10);
  const router = useRouter();
  const { addAnswer } = useQuiz();

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
      const timeout = setTimeout(() => {
        const isCorrect = selected === "correct";

        addAnswer({
          question: question.word,
          selected,
          correctAnswer: question.correct,
          isCorrect,
        });

        if (currentQuestionIndex < 4) {
          setCurrentQuestionIndex((prev) => prev + 1);
          setSelected("");
          reset();
        } else {
          router.push("/result");
        }
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [selected, count]);

  useEffect(() => {}, [selected, count, currentQuestionIndex]);
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
                className="m-5 "
              />
              {option.text}
            </label>
          ))}
        </form>
      </div>
      <div className=" flex flex-col items-center m-10">
        {selected === "" && count === 0 ? (
          <h1 className="text-yellow-300 font-bold text-2xl">No Answer</h1>
        ) : (
          <h1
            className={`font-bold text-2xl ${
              selected === "correct" ? "text-green-500" : "text-red-500"
            }`}
          >
            {selected}
          </h1>
        )}
        <CountDown count={count} />
      </div>
    </div>
  );
};

export default QuestionComponent;
