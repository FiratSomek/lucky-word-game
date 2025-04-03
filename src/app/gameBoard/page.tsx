import React from "react";

const gameBoard = () => {
  return (
    <div className="flex h-screen justify-center items-center drop-shadow-[0_4px_4px_yellow]">
      <div
        className="gameBoard-border flex justify-center  w-3/4 h-128 
"
      >
        <h1 className="neon-text text-2xl font-bold">Seçili kelime</h1>
      </div>
    </div>
  );
};

export default gameBoard;
