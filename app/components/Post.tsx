export type LikeType = 'LIKE' | 'DISLIKE'; 

export type LikeTypes = {
   type: LikeType;
}

export type Comment = {
   content: string;
}

export type PostTypes = {
   userId: string;
   title: string;
   content: string;
}

export default function Post({ userId, title, content }: PostTypes) { 
   
   return (
      <>
         <p className="self-start">posted by <span className="font-semibold">{userId}</span></p>
         <div className="w-full h-auto p-3 bg-[#171717] text-white rounded-sm border border-red-500">
            <h3>{title}</h3>
            <p>{content}</p>
         </div>
      </>
   
   )
}