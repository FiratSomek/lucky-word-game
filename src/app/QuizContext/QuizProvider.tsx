"use client";

import { useContext, useState, createContext } from "react";

type Answer = {
  question: string;
  selected: string;
  correctAnswer: string;
  isCorrect: boolean;
};

type QuizContextType = {
  answers: Answer[];
  addAnswer: (answer: Answer) => void;
  resetQuiz: () => void;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [answers, setAnswers] = useState<Answer[]>([]);

  const addAnswer = (answer: Answer) => {
    setAnswers((prev) => [...prev, answer]);
  };

  const resetQuiz = () => {
    setAnswers([]);
  };

  return (
    <QuizContext.Provider value={{ answers, addAnswer, resetQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) throw new Error("useQuiz must be used within a QuizProvider");
};
