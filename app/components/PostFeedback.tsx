import FeedbackButton from "./FeedbackButton";
import Link from "next/link";

export type FeedbackTypes = {
    id: string;
   likes: number;
   comments: number;
}

export default function PostFeedback({ id, likes, comments }: FeedbackTypes) {
  
   return (
    <div className="flex items-center gap-2 mt-3">
      <FeedbackButton feedbackType='LIKE' feedbackCount={likes} />
      
      <Link href={`/post/${id}`}>
        <FeedbackButton feedbackType='COMMENT' feedbackCount={comments} />
      </Link>
    </div>
  )
}