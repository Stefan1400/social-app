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
               user: true,
               replies: {
                  include: {
                     user: true
                  }
               }
            }
            },
         likes: true,
         user: true
      }
   })

   if (!post) {
      return <>Post not found</>
   } 

   const user = await getCurrentUser();
   const isLiked = user ? post.likes.some(l => l.userId === user.id) : false;
   const commentCount = post.comments?.reduce(
      (total, comment) => total + 1 + (comment.replies?.length || 0),
      0
   ) ?? 0;

   return (
      <div className="w-screen h-screen flex flex-col pt-18">
         <div className="p-3 rounded-md">
            <div className="flex items-center gap-2">
               <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
               <p className="font-semibold">{post.user.username}</p>
            </div>
            <h1 className="text-3xl mt-5">{post.title}</h1>
            <p className="mt-3">{post.content}</p>
         </div>

         <PostFeedback id={post.id} likes={post?.likes.length || 0} commentCount={commentCount} isLiked={isLiked} />

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
                        replies={c.replies}
                     />
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}