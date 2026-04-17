'use client';

import Link from "next/link";
import { Menu, PlusSquare } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full h-14 px-4 flex items-center justify-between bg-[#171717] border-b border-neutral-800 fixed left-0 top-0 z-1000">

      {/* Left: Menu Icon */}
      <button className="p-2 hover:bg-neutral-800 rounded-md transition">
        <Menu size={22} />
      </button>

      {/* Center: Logo */}
      <Link href="/" className="text-lg font-semibold tracking-wide">
        social-app
      </Link>

      {/* Right: Create Icon */}
      <div className="flex items-center gap-5">
         <Link 
            href="/create" 
            className="p-2 hover:bg-neutral-800 rounded-md transition"
            >
            <PlusSquare size={22} />
         </Link>

         <Link
            href='/profile'
            className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center overflow-hidden hover:bg-neutral-700 transition"
            >
         </Link>
      </div>
    </nav>
  );
}