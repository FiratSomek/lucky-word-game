import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-col place-items-center drop-shadow-[0_2px_2px_yellow]">
      <div>
        <Link href={`/gameBoard`}>
          <button className="btn-border neon-text cursor-pointer p-4 mt-20 text-lg font-bold  drop-shadow-xl">
            Start Game
          </button>
        </Link>
      </div>
      <div>
        <button className="btn-border neon-text cursor-pointer p-4 mt-20 text-lg font-bold drop-shadow-xl">
          Show Last 5 Game Results
        </button>
      </div>
    </div>
  );
}
