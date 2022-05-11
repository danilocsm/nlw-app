import { Feedback } from "../App";

interface FeedbackContainerProps {
    feedback: Feedback;
}

export function FeedbackContainer({ feedback }: FeedbackContainerProps) {
  return (
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
      <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {`${feedback.type}`}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {`${feedback.comment}`}
        </p>
      </div>
    </div>
  );
}
