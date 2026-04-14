export type CommentTypes = {
   userId: string;
   content: string;
}

export default function Comment({ userId, content }: CommentTypes) { 
   
   return (
      <div className="w-full h-auto p-3 bg-[#171717] text-white rounded-sm self-end border border-blue-500">
         <p>{userId}</p>
         <p>{content}</p>
      </div>
   )
}