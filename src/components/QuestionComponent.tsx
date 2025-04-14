import React, { useMemo } from "react";
import { normalizeCategory } from "@/app/utils/normalize";
import { HiH1 } from "react-icons/hi2";

type QuestionType = {
  word: string;
  correct: string;
  incorrect: string;
};
type Props = { question: QuestionType };

const QuestionComponent = ({ question }: Props) => {
  const options = [
    { label: "Doğru Cevap", value: "correct", text: question.correct },
    { label: "Yanlış Cevap", value: "incorrect", text: question.incorrect },
  ];

  const shuffledOprions = useMemo(
    () => [...options].sort(() => Math.random() - 0.5),
    [question]
  );
  return (
    <div>
      <div>{question && <h1>{question.word}</h1>}</div>
      <div></div>
    </div>
  );
};

export default QuestionComponent;
