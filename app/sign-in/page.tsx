"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-950 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-xl">

        {/* Header */}
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-white">
            Sign in
          </h1>
          <p className="mt-1 text-sm text-neutral-400">
            Continue where you left off
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">

          {/* Email */}
          <div>
            <label className="text-sm text-neutral-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-white placeholder:text-neutral-600 focus:border-neutral-600 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-neutral-300">Password</label>

            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2 pr-20 text-sm text-white placeholder:text-neutral-600 focus:border-neutral-600 focus:outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-white py-2 text-sm font-medium text-black transition hover:bg-neutral-200"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-neutral-500">
          Don't have an account?{" "}
          <Link href="/sign-up" className="text-white hover:underline">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
}