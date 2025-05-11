"use client";

import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import LogInButton from "./buttons/LogInButton";
import LogOutButton from "./buttons/LogOutButton";

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { user, isLoading, error } = useUser();

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
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
          {user ? (
            <div>
              {" "}
              <Link
                href="/api/auth/logout"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <LogOutButton />
              </Link>
            </div>
          ) : (
            <div>
              {" "}
              <Link href="/api/auth/login">
                <LogInButton />
              </Link>
              <a
                href="/settings"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Ayarlar
              </a>
              <button
                onClick={() => alert("Çıkış yapılıyor")}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Çıkış Yap
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
