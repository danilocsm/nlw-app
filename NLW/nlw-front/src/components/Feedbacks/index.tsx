import { Feedback } from "../App";
import { FeedbackContainerItem } from "./FeedbackContainerItem";
import { Transition } from "react-transition-group";

interface FeedbacksContainerProps {
  feedbacks: Feedback[];
  showFeedbacks: boolean;
}
const transitions = {
  entering: {
    display: "block",
  },
  entered: {
    opacity: 1,
    display: "block",
  },
  exiting: {
    opacity: 0,
    display: "block",
  },
  exited: {
    opacity: "0",
    display: "none",
  },
};

export function FeedbacksContainer({
  feedbacks,
  showFeedbacks,
}: FeedbacksContainerProps) {
  return (
    <>
      <div className="flex flex-col justify-center text-blue-400 dark:text-white items-center">
        <div className="static max-w-x max-h-y items-center flex flex-col justify-center text-9xl py-3 overflow-hidden mt-20">
          <h1>Feedbacks</h1>
        </div>
        <div className="grid grid-cols-3 flex-wrap justify-between content-start scrollbar scrollbar-thumb-white scrollbar-track-transparent scrollbar-thin">
          <Transition in={showFeedbacks} timeout={350}>
            {state => (
              feedbacks.map((feedback) => {
                return (
                  <div
                    style={{
                      transition: "all .1s",
                      opacity: 0,
                      display: "none",
                      ...transitions[state]
                    }}
                  >
                    <FeedbackContainerItem feedback={feedback} />
                  </div>
                );
              })
           )}
          </Transition>
        </div>
      </div>
    </>
  );
}
