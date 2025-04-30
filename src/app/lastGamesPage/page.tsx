import React from "react";

const LastGamesPage = () => {
  return (
    <div className="flex h-screen justify-center items-center drop-shadow-[0_4px_4px_yellow]">
      <div
        className="gameBoard-border flex flex-col items-center  p-5 w-3/4 h-128 
"
      >
        <h1 className="neon-text text-2xl font-bold ">Last 5 games</h1>
      </div>
    </div>
  );
};

export default LastGamesPage;
