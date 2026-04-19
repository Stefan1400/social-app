import { prisma } from "@/lib/prisma";
import Comment from "@/app/components/Comment";
import PostFeedback from "@/app/components/PostFeedback";
import React from "react";
import CommentBox from "@/app/components/CommentBox";

export default async function ViewPost({ params }: {
   params: Promise<{ id: string }>
}) {

   const { id } = await params;

   const post = await prisma.post.findUnique({
      where: { id: id },
      include: { 
         comments: true,
         likes: true 
      }
   })

   if (!post) {
      return <>Post not found</>
   } 

   const likesCount = post.likes.filter((l) => l.type === 'LIKE').length;
   const dislikesCount = post.likes.filter((l) => l.type === 'DISLIKE').length;

   return (
      <div className="w-screen h-screen flex flex-col">
         <div className="p-3 bg-[#131313] rounded-md">
            <p>posted by user <span className="font-semibold">{post.userId}</span></p>
            <h1 className="text-3xl mt-7">{post.title}</h1>
            <p className="mt-3">{post.content}</p>
         </div>

         <PostFeedback likes={likesCount} dislikes={dislikesCount} />

         <CommentBox />

         <div className="mt-25">
            <h3 className="pl-5 text-[1.2rem]">Comments</h3>
            <ul className="list-none flex flex-col w-screen p-5 gap-5">
               {post.comments?.map((c, index) => (
                  <li key={index}>
                     <Comment 
                        userId={c.userId}  
                        content={c.content} 
                     />
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}