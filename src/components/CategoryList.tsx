import words from "../constants/words.json";

export default function CategoryList() {
  const categoryTitles = Object.keys(words.categories);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className=" neon-text text-xl font-bold mb-4 m-5">Categories</h1>
      <ul className="grid grid-cols-2  gap-4 max-w-full overflow-hidden">
        {categoryTitles.map((title) => (
          <li key={title}>
            <button className="neon-button-border min-w-80 m-4  p-2">
              {title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
