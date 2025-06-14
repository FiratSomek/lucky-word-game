"use client";
import React from "react";
import { useQuiz } from "../../QuizContext/QuizProvider";
import Link from "next/link";

const Result = () => {
  const { answers, resetQuiz } = useQuiz();

  return (
    <div className="flex h-screen justify-center items-center drop-shadow-[0_4px_4px_yellow]">
      <div
        className="gameBoard-border flex flex-col justify-between items-center  p-5 w-3/4 h-200 
"
      >
        {" "}
        <h1 className="text-2xl neon-text font-bold mb-6">Your Results</h1>
        <ul>
          {answers.map((ans, index) => (
            <li key={index} className="mt-5">
              {" "}
              <strong>Word:</strong> {ans.question} <br />
              <strong>Correct Answer:</strong> {ans.correctAnswer} <br />{" "}
              <strong>Incorrect Answer:</strong> {ans.inCorrectAnswer} <br />
              <strong>
                Your Choice:{" "}
                <span
                  className={ans.isCorrect ? "text-green-500" : "text-red-500"}
                >
                  {ans.isCorrect ? "Correct" : "Wrong"}
                </span>
              </strong>
            </li>
          ))}
        </ul>{" "}
        <Link href="/">
          {" "}
          <button onClick={resetQuiz} className="neon-button-border p-2 ">
            <span className="neon-text font-bold">Reset Quiz</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Result;
Result;
