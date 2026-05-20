'use client';

import { useEffect, useRef, useState } from "react";
import { createComment } from "@/app/actions/createComment";

export default function CommentBox() {
  const [isActive, setIsActive] = useState(false);
  const [content, setContent] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isActive) {
      textareaRef.current?.focus();
    }
  }, [isActive]);

  return (
    <div className="w-full max-w-3xl px-6 mx-auto mt-8">
      {isActive ? (
        <form action={createComment} className="w-full rounded-3xl border border-neutral-700 bg-[#121212] p-4 shadow-sm shadow-black/20">
          <textarea
            ref={textareaRef}
            className="min-h-[120px] w-full resize-none rounded-3xl border border-transparent px-4 py-4 text-sm text-white placeholder:text-neutral-500 outline-none transition"
            placeholder="Share your thoughts..."
            name="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />

          <div className="mt-4 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                setContent("");
                setIsActive(false);
              }}
              className="rounded-full border border-neutral-700 bg-transparent px-4 py-2 text-sm text-neutral-300 transition hover:border-white hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!content.trim()}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Comment
            </button>
          </div>
        </form>
      ) : (
        <button
          type="button"
          onClick={() => setIsActive(true)}
          className="w-full rounded-3xl border border-neutral-700 bg-[#121212] px-4 py-4 text-left text-sm text-neutral-400 transition hover:border-white hover:text-white"
        >
          What are your thoughts? Click here to reply.
        </button>
      )}
    </div>
  );
}