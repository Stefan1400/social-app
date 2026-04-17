'use client';

import Link from "next/link";
import { X } from "lucide-react";

type User = {
  userId: string;
} | null;

export default function MenuDropdown({
  onClose,
  user,
}: {
  onClose: () => void;
  user?: User;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm">

      {/* Panel */}
      <div className="w-full h-full bg-[#171717] flex flex-col">

        {/* Top bar */}
        <div className="flex justify-between items-center p-4 border-b border-neutral-800">

          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-800 rounded-md"
          >
            <X size={22} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col p-4 gap-4 text-lg">

          <Link href="/" onClick={onClose} className="hover:text-gray-300">
            Home
          </Link>

          {user ? (
            <>
              <Link href="/create" onClick={onClose} className="hover:text-gray-300">
                Create Post
              </Link>

              <Link href="/profile" onClick={onClose} className="hover:text-gray-300">
                Profile
              </Link>
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