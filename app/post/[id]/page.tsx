import { prisma } from "@/lib/prisma";
import Comment from "@/app/components/Comment";
import PostFeedback from "@/app/components/PostFeedback";
import CommentBox from "@/app/components/CommentBox";
import { getCurrentUser } from "@/lib/auth";

export default async function ViewPost({ params }: {
   params: Promise<{ id: string }>
}) {

   const { id } = await params;

   const post = await prisma.post.findUnique({
      where: { id: id },
      include: { 
         comments: {
            include: {
               user: true
            }
         },
         likes: true 
      }
   })

   if (!post) {
      return <>Post not found</>
   } 

   const user = await getCurrentUser();
   const isLiked = user ? post.likes.some(l => l.userId === user.id) : false;

   return (
      <div className="w-screen h-screen flex flex-col">
         <div className="p-3 rounded-md">
            <p>posted by user <span className="font-semibold">{post.userId}</span></p>
            <h1 className="text-3xl mt-7">{post.title}</h1>
            <p className="mt-3">{post.content}</p>
         </div>

         <PostFeedback id={post.id} likes={post?.likes.length || 0} comments={post.comments?.length || 0} isLiked={isLiked} />

         <CommentBox />

         <div className="mt-25">
            <h3 className="pl-5 text-[1.2rem]">Comments</h3>
            <ul className="list-none flex flex-col w-screen p-5 gap-5">
               {post.comments?.map((c, index) => (
                  <li key={index}>
                     <Comment 
                        username={c.user.username}
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