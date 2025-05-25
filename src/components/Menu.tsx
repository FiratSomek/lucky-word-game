import React from "react";
import { CgMenu } from "react-icons/cg";

const Menu = () => {
  return (
    <div>
      {" "}
      <button>
        <CgMenu className="size-7 text-green-400 hover:text-yellow-200 cursor-pointer" />
      </button>
    </div>
  );
};

export default Menu;
