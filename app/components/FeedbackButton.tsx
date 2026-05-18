'use client';

import { Heart } from "lucide-react";

type Props = {
   feedbackType: 'LIKE';
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
      <button onClick={handleLikePost} className="w-[50px] h-auto p-2 flex items-center justify-between rounded-lg">
         {feedbackType === 'LIKE' ? <Heart size={19} /> : ''}
         <span>{feedbackCount}</span>
      </button>
   )
}