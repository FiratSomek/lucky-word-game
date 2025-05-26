"use client";
import React, { useEffect, useRef, useState } from "react";
import { CgMenu } from "react-icons/cg";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <CgMenu className="size-7 text-green-400 hover:text-yellow-200 cursor-pointer" />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
          <div
            className=" flex flex-col
  "
          >
            <button className="font-bold px-4 py-2 w-full cursor-pointer hover:bg-gray-100 transition">
              language
            </button>
            <button className="font-bold px-4 py-2 w-full cursor-pointer hover:bg-gray-100 transition">
              mode
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
