'use client';

import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";

type Props = {
   feedbackType: 'LIKE' | 'COMMENT';
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
            userId: 'cmokgr9g10000k7z3tiacpc79',  
            postId: 'cmo7kn60d0001y19s4jk6gx14',
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
         {feedbackType === 'LIKE' ? 
            <Heart size={19} /> 
         : feedbackType === 'COMMENT' &&
         <MessageCircle size={19} />}
         
         <span>{feedbackCount}</span>
      </button>
   )
}