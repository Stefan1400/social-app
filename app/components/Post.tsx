import type { User } from "@/types/user";
import PostContent from "./PostContent";
import PostFeedback from "./PostFeedback";
import Link from "next/link";

export type Like = {
   id: string;
   userId: string;
   postId: string;
}

export type PostTypes = {
   title: string;
   content: string;
   user: User;
   id: string;
   likes?: Like[];
   createdAt: Date;
   commentCount?: number;
   isLiked: boolean;
}

export default function Post({ 
   id, 
   title, 
   content, 
   user, 
   createdAt, 
   likes, 
   commentCount = 0, 
   isLiked
}: PostTypes) { 
   return (
      <>
         <div className="flex flex-col gap-3 w-full h-auto p-3 py-4 text-white rounded-sm border-y-2 border-[#1f1f1f]">
            <Link href={`/post/${id}`} >
               <PostContent 
                  title={title} 
                  content={content} 
                  user={user} 
                  createdAt={createdAt}
               />
            </Link>
            
            <PostFeedback 
               id={id}
               likes={likes?.length || 0} 
               commentCount={commentCount} 
               isLiked={isLiked}
            />
         </div>
      </>
   )
}