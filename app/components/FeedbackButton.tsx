'use client';

import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export type FeedbackButtonProps = {
   feedbackType: 'LIKE' | 'COMMENT';
   feedbackCount: number;
   isLiked?: boolean;
   postId?: string;
}

export default function FeedbackButton({ feedbackType, feedbackCount, isLiked, postId }: FeedbackButtonProps) {

   const [liked, setLiked] = useState(isLiked ?? false);
   const [likesCount, setLikesCount] = useState(feedbackCount);
   
   const handleLikePost = async () => {
      if (feedbackType !== 'LIKE') return;
      if (!postId) return;

      const nextLiked = !liked;
      setLiked(nextLiked);
      setLikesCount(prev => nextLiked ? prev + 1 : prev - 1);

      const res = await fetch('/api/like/like-post', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ postId })
      })

      const data = await res.json();

      if (!res.ok) {
         // revert optimistic update on error
         setLiked(!nextLiked);
         setLikesCount(prev => nextLiked ? prev - 1 : prev + 1);
         console.log("Like failed", data);
         return;
      }

      // sync with server-provided likesCount if available
      if (typeof data?.likesCount === 'number') {
         setLikesCount(data.likesCount);
      }

      // ensure liked state matches server action (addedLike => liked true, updatedLike => unliked)
      if (data?.addedLike) setLiked(true);
      if (data?.updatedLike) setLiked(false);

   }
   
   return (
      <button type="button" onClick={handleLikePost} className="w-12.5 h-auto p-2 flex items-center justify-between rounded-lg">
         {feedbackType === 'LIKE' ? 
            <Heart size={19} fill={liked ? "white" : "none"} /> 
         : feedbackType === 'COMMENT' &&
         <MessageCircle size={19} />}
         
         <span>{likesCount}</span>
      </button>
   )
}