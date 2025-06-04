"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import LogInButton from "./buttons/LogInButton";
import LogOutButton from "./buttons/LogOutButton";

export default function ProfileMenu() {
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
    <div className="relative inline-block text-left" ref={menuRef}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <CgProfile className="size-8 text-green-400 hover:text-yellow-200 cursor-pointer" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
          <div>
            <div
              className="relative w-1/2
 inline-block text-left bg-green-500"
            >
              <Link href="/api/auth/login">
                {" "}
                <LogInButton />
              </Link>
            </div>
            <div className="relative w-1/2 inline-block text-left bg-red-500 ">
              <LogOutButton />
            </div>
          </div>
          <div>
            <p>User</p>
          </div>
        </div>
      )}
    </div>
  );
}
