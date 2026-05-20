import PostFeedback from "./PostFeedback";

export type CommentTypes = {
   userId: string;
   content: string;
   username?: string;
}

export default function Comment({ userId, content, username }: CommentTypes) { 
   
   return (
      <div className="w-full h-auto p-3 text-white rounded-lg self-end flex flex-col gap-3 border-neutral-700 border bg-[#121212]">
         <p className="font-semibold">{username}</p>
         <p>{content}</p>
      </div>
   )
}