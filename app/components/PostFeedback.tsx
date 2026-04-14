import FeedbackButton from "./FeedbackButton";

export type FeedbackTypes = {
   likes: number;
   dislikes: number;
}

export default function PostFeedback({ likes, dislikes }: FeedbackTypes) {
  
   return (
    <div className="flex items-center gap-2 mt-3 ml-3">
      <FeedbackButton feedbackType='LIKE' feedbackCount={likes} />
      <FeedbackButton feedbackType='DISLIKE' feedbackCount={dislikes} />
    </div>
  )
}