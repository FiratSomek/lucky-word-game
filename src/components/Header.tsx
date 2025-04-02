import React from "react";
import { CgMenu } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className="flex align-center justify-between p-6 border-10 border-transparent border-gradient">
      <div>
        <button>
          <CgMenu className="size-7 text-blue-800 hover:text-blue-500 cursor-pointer" />
        </button>
      </div>
      <div>
        <span className="text-2xl font-bold neon-text cursor-pointer">
          Lucky Word Game
        </span>
      </div>
      <div>
        <button>
          <CgProfile className="size-7 text-blue-800 hover:text-blue-500 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Header;
