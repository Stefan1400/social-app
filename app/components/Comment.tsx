import Reply from "./Reply";
import type { ReplyTypes } from "./Reply";

export type CommentTypes = {
   userId: string;
   content: string;
   username?: string;
   replies: ReplyTypes[];
}

export default function Comment({ content, username, replies }: CommentTypes) { 
   
   return (
      <div>
         <div className="w-full h-auto p-3 text-white rounded-lg self-end flex flex-col gap-3 border-neutral-700 border">
            <div className="flex items-center gap-2">
               <div className="w-5 h-5 bg-green-500 rounded-full"></div>
               <p className="font-semibold">{username}</p>
            </div>
            <p>{content}</p>
         </div>

         {replies.map((reply, index) => (
            <Reply 
               key={index}
               content={reply.content}
               user={reply.user}
            />
         ))}
      </div>
   )
}