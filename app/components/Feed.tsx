'use client';
import Post from "../components/Post";
import type { PostTypes } from "../components/Post";
import Link from "next/link";

type FeedTypes = {
   posts: PostTypes[];
};

export default function Feed({ posts }: FeedTypes) {
   return (
      <div className="w-screen h-screen p-3 flex flex-col items-center">
         <div className="fixed left-0 top-15 p-5 z-100 w-screen flex justify-between px-3">
            <h1>Feed</h1>
         </div>
         
         <ul className="list-none mt-30 flex flex-col w-screen p-5 gap-5">
            {posts.map((p, index) => {

            return (
               <li key={p.id}>
                  <Link href={`/pages/view-post/${p.id}`} >
                     <Post 
                        id={p.id}
                        user={p.user} 
                        title={p.title} 
                        content={p.content} 
                     />
                  </Link>
               </li>
            )
            })}
         </ul>
      </div>
   )
}