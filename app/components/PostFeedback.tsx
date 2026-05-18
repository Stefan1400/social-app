import FeedbackButton from "./FeedbackButton";

export type FeedbackTypes = {
   likes: number;
   comments: number;
}

export default function PostFeedback({ likes, comments }: FeedbackTypes) {
  
   return (
    <div className="flex items-center gap-2 mt-3">
      <FeedbackButton feedbackType='LIKE' feedbackCount={likes} />
      <FeedbackButton feedbackType='COMMENT' feedbackCount={comments} />
    </div>
  )
}