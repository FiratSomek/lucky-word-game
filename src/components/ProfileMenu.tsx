"use client"; // Next.js 13+ için gerekli (app router'da interaktivite için)

import { useState, useRef, useEffect } from "react";

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Menü dışına tıklanınca kapat
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
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400"
      >
        😊
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
          <a
            href="/profile"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Profil
          </a>
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
  );
}
