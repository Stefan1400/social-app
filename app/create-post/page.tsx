'use client';

import { useEffect, useState } from "react";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [disabled, setDisabled] = useState(true);

  function validateForm() {
    if (!title) {
      setDisabled(true);
      return false;
    }
    setDisabled(false);
    return true;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validated = validateForm();

    if (!validated) return;

    setDisabled(false);

    console.log({
      title,
      content,
    });

    const res = await fetch('/api/posts/create-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content })
    });

    if (!res.ok) {
      throw new Error('Error when creating post');
    };

    const data = await res.json();

    console.log('createdPost:', data);

    setTitle('');
    setContent('');
  }

  useEffect(() => {
    validateForm();
  }, [title, content]);

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
            placeholder="Title (required)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded-md bg-[#0f0f0f] border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Content Textarea */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-400">Content</label>
          <textarea
            placeholder="Content (optional)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full p-2 rounded-md bg-[#0f0f0f] border border-neutral-700 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          disabled={disabled}
          type="submit"
          className={`${disabled ? 'bg-[#1c1c1c] text-gray-400' : 'bg-blue-500 text-white'} mt-2 hover:bg-blue-600 transition py-2 rounded-md font-medium`}
        >
          Post
        </button>
      </form>
    </div>
  );
}