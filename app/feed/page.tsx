'use client';
import { useState } from "react";
import Post from "../components/Post";
import type { PostTypes } from "../components/Post";
import Link from "next/link";

export default function Feed() {
   const [postData, setPostData] = useState<PostTypes[] | null>(null);
   
   async function handleGetPosts() {
      
      const res = await fetch('/api/posts/get-posts', {
         method: 'GET'
      })

      if (!res.ok) {
         console.log('response was not okay:', res);
      };

      const result = await res.json();

      setPostData(result.posts);
   }
   
   return (
      <div className="w-screen h-screen p-3 flex flex-col items-center">
         <div className="fixed left-0 top-15 p-5 z-100 w-screen flex justify-between px-3">
            <h1>Feed</h1>

            <button onClick={handleGetPosts}>Get Posts</button>
         </div>
         
         <ul className="list-none mt-30 flex flex-col w-screen p-5 gap-5">
            {postData?.map((p, index) => {

            return (
               <li key={index}>
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