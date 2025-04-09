"use client";

import { useParams } from "next/navigation";
import words from "../../../constants/words.json";

const gameBoard = () => {
  const params = useParams();
  const category = params?.category as string;

  const normalizeCategory = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]/gi, "");

  const currentCategory = Object.keys(words.categories).find(
    (key) => normalizeCategory(key) === category
  ) as keyof typeof words.categories | undefined;

  const questions = currentCategory ? words.categories[currentCategory] : [];

  return (
    <div className="flex h-screen justify-center items-center drop-shadow-[0_4px_4px_yellow]">
      <div
        className="gameBoard-border flex flex-col items-center w-3/4 h-128 
"
      >
        <div>
          <h1 className="neon-text text-2xl font-bold cursor-pointer">
            {currentCategory}
          </h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default gameBoard;
