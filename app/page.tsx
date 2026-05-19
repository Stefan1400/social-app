'use server';
import { prisma } from "@/lib/prisma";
import Feed from "./components/Feed";
import { getCurrentUser } from "@/lib/auth";

export default async function Home() {
  const user = await getCurrentUser();
  
  const fetchedPosts = await prisma.post.findMany({
    include: {
      user: true,
      likes: true,
      comments: true,
    }
  })

  const postsWithLikedStatus = fetchedPosts.map(post => ({
    ...post,
    isLiked: user ? post.likes.some(like => like.userId === user.id) : false
  }));
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Feed posts={postsWithLikedStatus} />
    </div>
  );
}
