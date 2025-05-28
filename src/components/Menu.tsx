"use client";
import React, { useEffect, useRef, useState } from "react";
import { CgMenu } from "react-icons/cg";
import LanguageButton from "./buttons/LanguageButton";

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
          <div className="flex flex-col">
            <div>
              <LanguageButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
