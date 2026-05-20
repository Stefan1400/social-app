import type { User } from "@/types/user";

export type ReplyTypes = {
   content: string;
   user: User | null;
}

export default function Reply({ content, user }: ReplyTypes) { 
   
   return (
      <div className="w-full h-auto p-3 text-white rounded-lg self-end flex flex-col gap-3 border-neutral-700 border ml-3 mt-3">
         <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
            <p className="font-semibold">{user?.username}</p>
         </div>
         <p>{content}</p>
      </div>
   )
}