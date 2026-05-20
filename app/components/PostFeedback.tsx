'use client';
import FeedbackButton from "./FeedbackButton";
import Link from "next/link";

export type FeedbackTypes = {
   id: string;
   likes: number;
   commentCount: number;
   isLiked?: boolean;
}

export default function PostFeedback({ id, likes, commentCount, isLiked }: FeedbackTypes) {

   return (
    <div className="flex items-center gap-2 mt-3">
      <FeedbackButton 
        feedbackType='LIKE' 
        feedbackCount={likes} 
        isLiked={isLiked}
        postId={id}
      />
      
      <Link href={`/post/${id}`}>
        <FeedbackButton 
          feedbackType='COMMENT' 
          feedbackCount={commentCount} 
          />
      </Link>
    </div>
  )
}