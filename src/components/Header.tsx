import Link from "next/link";
import React from "react";
import { CgMenu } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className=" neon-header-border flex align-center justify-between p-6 drop-shadow-[0_2px_2px_yellow]">
      <div>
        <button>
          <CgMenu className="size-7 text-green-400 hover:text-yellow-200 cursor-pointer" />
        </button>
      </div>
      <div>
        <Link href={`/`}>
          <span className="text-2xl font-bold neon-text cursor-pointer">
            Lucky Word Game
          </span>
        </Link>
      </div>
      <div>
        <button>
          <CgProfile className="size-7 text-green-400 hover:text-yellow-200 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Header;
