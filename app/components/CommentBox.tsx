import { createComment } from "@/app/actions/createComment";

export default async function CommentBox() {
  
   return (
    <form action={createComment} className="min-h-screen w-full bg-[#171717] flex items-center justify-center p-6">
        <textarea
          className="h-32 w-full resize-none rounded-lg bg-[#252525] p-3 text-sm text-white placeholder:text-neutral-500 outline-none"
          placeholder="Write something..."
          name="content"
        />

        <div className="mt-3 flex items-center justify-between gap-2">
            <button type="button" className="rounded-lg bg-black px-4 py-2 text-sm text-white hover:bg-neutral-700 transition">
              Cancel
            </button>
            <button type="submit" className="rounded-lg bg-white px-4 py-2 text-sm text-black hover:bg-neutral-200 transition">
              Post
            </button>
        </div>
    </form>
  );
}