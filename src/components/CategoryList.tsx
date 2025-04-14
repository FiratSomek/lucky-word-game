"use client";
import words from "../constants/words.json";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { normalizeCategory } from "@/app/utils/normalize";

export default function CategoryList() {
  const [ready, setReady] = useState(false);
  const [countDownToStart, setCountDownToStart] = useState(5);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const router = useRouter();

  const categoryTitles = Object.keys(words.categories);

  useEffect(() => {
    if (ready && countDownToStart > 0) {
      const timer = setTimeout(() => {
        setCountDownToStart((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
    if (ready && countDownToStart === 0 && selectedCategory) {
      router.push(`/gameBoard/${normalizeCategory(selectedCategory)}`);
    }
  }, [ready, countDownToStart, selectedCategory]);

  if (ready) {
    return (
      <div className="flex h-full justify-center items-center">
        {countDownToStart >= 3 ? (
          <h1 className="neon-text text-bold text-4xl">{countDownToStart}</h1>
        ) : (
          <h1 className="text-red-500 font-bold text-5xl">
            {countDownToStart}!
          </h1>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className=" neon-text text-2xl font-bold mb-4 m-5">Categories</h1>
      <ul className="grid grid-cols-2  gap-4 max-w-full overflow-hidden">
        {categoryTitles.map((title, index) => (
          <li key={index}>
            <button
              onClick={() => {
                setReady(true);
                setSelectedCategory(title);
              }}
              className="neon-button-border min-w-80 m-4  p-2"
            >
              <span className="neon-text cursor-pointer font-bold">
                {title}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
