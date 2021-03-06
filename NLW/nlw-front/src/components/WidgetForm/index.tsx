import { CloseButton } from "../CloseButton";

import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

// import bugImageUrl from '../assets/bug.svg'
// import ideaImageUrl from '../assets/idea.svg'
// import bugImageUrl from '../assets/other.svg'

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      // source: bugImageUrl,
      alt: "",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      // source: ideaImageUrl,
      alt: "",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      // source: otherImageUrl,
      alt: "",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-white dark:bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-blue-400 dark:text-neutral-400">
        Feito com amor pela{" "}
        <a className="underline underline-offset-2" href="https://google.com/">
          RocketSeat
        </a>
      </footer>
    </div>
  );
}
