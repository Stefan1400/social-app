export type CommentTypes = {
   userId: string;
   content: string;
   username?: string;
}

export default function Comment({ userId, content, username }: CommentTypes) { 
   
   return (
      <div className="w-full h-auto p-3 text-white rounded-lg self-end flex flex-col gap-3 border-neutral-700 border">
         <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-500 rounded-full"></div>
            <p className="font-semibold">{username}</p>
         </div>
         <p>{content}</p>
      </div>
   )
}