import { User } from "@/types/user";

export type LikeType = 'LIKE' | 'DISLIKE'; 

export type LikeTypes = {
   type: LikeType;
}

export type Comment = {
   content: string;
}

export type PostTypes = {
   title: string;
   content: string;
   user: User;
   id: string;
}

export default function Post({ title, content, user }: PostTypes) { 
   
   return (
      <>
         <p className="self-start">posted by <span className="font-semibold">{user.username}</span></p>
         <div className="w-full h-auto p-3 bg-[#171717] text-white rounded-sm border border-red-500">
            <h3 className="text-xl font-medium">{title}</h3>
            <p>{content}</p>
         </div>
      </>
   )
}