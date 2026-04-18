'use client';

import { useState } from "react";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // You will implement this later
    console.log({
      title,
      content,
    });
  }

  return (
    <div className="w-screen min-h-screen flex justify-center items-start pt-24 px-4">
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col gap-6 p-6 rounded-md"
      >
        {/* Title */}
        <h1 className="text-2xl font-semibold">Create Post</h1>

        {/* Title Input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400">Title</label>
          <input
            type="text"
            placeholder="Enter a title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded-md bg-[#0f0f0f] border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Content Textarea */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400">Content</label>
          <textarea
            placeholder="Write your post..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full p-2 rounded-md bg-[#0f0f0f] border border-neutral-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-2 bg-blue-500 hover:bg-blue-600 transition text-white py-2 rounded-md font-medium"
        >
          Post
        </button>
      </form>
    </div>
  );
}