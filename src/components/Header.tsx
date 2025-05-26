import Link from "next/link";
import React from "react";
import ProfileMenu from "./ProfileMenu";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className=" neon-header-border flex align-center justify-between p-6 drop-shadow-[0_2px_2px_yellow]">
      <div>
        <Menu />
      </div>
      <div>
        <Link href={`/`}>
          <span className="text-2xl font-bold neon-text cursor-pointer">
            Lucky Word Game
          </span>
        </Link>
      </div>
      <div>
        <ProfileMenu />
      </div>
    </div>
  );
};

export default Header;
