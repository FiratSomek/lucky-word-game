import Link from "next/link";
import words from "../constants/words.json";

export default function CategoryList() {
  const categoryTitles = Object.keys(words.categories);

  const normalizeCategory = (str: string) =>
    str.toLowerCase().replace(/[^a-z0-9]/gi, "");

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className=" neon-text text-2xl font-bold mb-4 m-5">Categories</h1>
      <ul className="grid grid-cols-2  gap-4 max-w-full overflow-hidden">
        {categoryTitles.map((title, index) => (
          <li key={index}>
            <Link href={`/gameBoard/${normalizeCategory(title)}`}>
              <button className="neon-button-border min-w-80 m-4  p-2">
                <span className="neon-text cursor-pointer font-bold">
                  {title}
                </span>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
