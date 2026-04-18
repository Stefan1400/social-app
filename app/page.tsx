import { prisma } from "@/lib/prisma";
import Feed from "./components/Feed";

export default async function Home() {
  
  const fetchedPosts = await prisma.post.findMany({
    include: {
      user: true
    }
  })
  
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Feed posts={fetchedPosts} />
    </div>
  );
}
