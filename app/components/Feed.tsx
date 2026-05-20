import Post from "../components/Post";
import type { PostTypes } from "../components/Post";

type FeedTypes = {
   posts: (PostTypes & { isLiked: boolean; commentCount?: number })[];
};

export default function Feed({ posts }: FeedTypes) {
   return (
      <div className="w-screen h-screen p-3 flex flex-col items-center">
         <div className="absolute left-0 top-15 p-5 z-100 w-screen flex justify-between px-3">
            <h1>Feed</h1>
         </div>
         
         <ul className="list-none mt-30 flex flex-col w-screen">
            {posts.map(p => {

            return (
               <li key={p.id}>
                  <Post 
                     id={p.id}
                     user={p.user} 
                     title={p.title} 
                     content={p.content} 
                     likes={p.likes}
                     commentCount={p.commentCount}
                     createdAt={p.createdAt}
                     isLiked={p.isLiked}
                  />
               </li>
            )
            })}
         </ul>
      </div>
   )
}