import { Feedback } from "../App";
import { FeedbackContainer } from "./FeedbackContainer";

interface FeedbacksContainerProps {
  feedbacks: Feedback[];
  showFeedbacks: boolean;
}

export function FeedbacksContainer({ feedbacks, showFeedbacks }: FeedbacksContainerProps) {
  return (
    <>
      <div className="flex flex-col justify-center text-blue-400 dark:text-white items-center">
        <div className="max-w-x max-h-y items-center flex flex-col justify-center text-9xl py-3 overflow-hidden">
          <h1>Feedbacks</h1>
        </div>
        <div className="grid grid-cols-3 flex-wrap justify-between content-start">
          {showFeedbacks 
            ? feedbacks.map((feedback) => {
                return <FeedbackContainer feedback={feedback} />;
              })
            : (<></>)}
        </div>
      </div>
    </>
  );
}
