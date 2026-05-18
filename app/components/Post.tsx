import { User } from "@/types/user";
import PostFeedback from "./PostFeedback";

export type Comment = {
   content: string;
}

export type PostTypes = {
   title: string;
   content: string;
   user: User;
   id: string;
   likes: number;
}

export default function Post({ title, content, user }: PostTypes) { 
   
   return (
      <>
         <div className="flex flex-col gap-3 w-screen h-auto p-3 py-4 text-white rounded-sm border-y-2 border-[#1f1f1f]">
            <div className="flex items-center gap-2">
               <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
               <p className="self-start text-sm">{user.username}</p>
            </div>
            <h3 className="text-xl font-medium">{title}</h3>
            <p>{content}</p>

            <PostFeedback likes={3}/>
         </div>
      </>
   )
}