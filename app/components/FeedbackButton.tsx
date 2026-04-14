'use client';

import LikeIcon from "../assets/LikeIcon.tsx";
import DislikeIcon from "../assets/DislikeIcon.tsx";

type Props = {
   feedbackType: 'LIKE' | 'DISLIKE';
   feedbackCount: number;
}

export default function FeedbackButton({ feedbackType, feedbackCount }: Props) {
   
   async function handleLikePost() {
      const likedPost = await fetch('/api/like/like-post', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({ 
            userId: 'cmnxhpdow0001p0wppdar35h9',  
            postId: 'cmnxilw5x0002p0wpk1wsvghi',
            type: feedbackType
         })
      })

      const result = await likedPost.json();

      if (!result) {
         console.log('request failed...');
      }

      console.log('result!!:', result);
   } 

   return (
      <button onClick={handleLikePost} className="w-[50px] h-auto p-2 flex items-center justify-between bg-[#181818] rounded-lg">
         <span>{feedbackCount}</span>
         {feedbackType === 'LIKE' ? <LikeIcon /> : feedbackType === 'DISLIKE' ? <DislikeIcon /> : ''}
      </button>
   )
}