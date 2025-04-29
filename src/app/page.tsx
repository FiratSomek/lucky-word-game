import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-col place-items-center drop-shadow-[0_2px_2px_yellow]">
      <div>
        <Link href={`/categoryPage`}>
          <button className="neon-button-border  cursor-pointer p-4 mt-20 text-lg font-bold  drop-shadow-xl">
            <span className="neon-text">Start Game</span>
          </button>
        </Link>
      </div>
      <div>
        <Link
          href={`/lastGamesPage
          `}
        >
          <button className="neon-button-border cursor-pointer p-4 mt-20 text-lg font-bold drop-shadow-xl">
            <span className="neon-text">Show Last 5 Game Results</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
