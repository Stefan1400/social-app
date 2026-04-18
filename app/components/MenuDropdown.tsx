'use client';

import Link from "next/link";
import { X } from "lucide-react";
import { User } from "@/types/user";

type MenuDropdownTypes = {
  user: User | null;
  onClose: () => void;
}

export default function MenuDropdown({ user, onClose }: MenuDropdownTypes) {
  
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm left-0 top-0 z-1000">

      {/* Panel */}
      <div className="w-full h-full bg-[#171717] flex flex-col items-start">

        {/* Top bar */}
        <div className="w-screen flex justify-between items-center p-4 border-b border-neutral-800">

          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-800 rounded-md flex-"
          >
            <X size={22} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-4 gap-4 text-large">

          <Link href="/" onClick={onClose} className="hover:text-gray-300">
            Home
          </Link>

          {user ? (
            <>
              <Link href="/create-post" onClick={onClose} className="hover:text-gray-300">
                Create Post
              </Link>

              <Link href="/profile" onClick={onClose} className="hover:text-gray-300">
                Profile
              </Link>

              <button className="hover:text-gray-300 p-0 text-left">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/sign-in" onClick={onClose} className="hover:text-gray-300">
                Sign In
              </Link>

              <Link href="/sign-up" onClick={onClose} className="hover:text-gray-300">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}