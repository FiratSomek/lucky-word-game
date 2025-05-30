import Link from "next/link";
import React from "react";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  return (
    <div className="relative flex items-center justify-center p-6 drop-shadow-[0_2px_2px_yellow] neon-header-border">
      <div>
        <Link href={`/`}>
          <span className="text-2xl font-bold neon-text cursor-pointer">
            Lucky Word Game
          </span>
        </Link>
      </div>
      <div className="absolute right-6 top-6">
        <ProfileMenu />
      </div>
    </div>
  );
};

export default Header;
