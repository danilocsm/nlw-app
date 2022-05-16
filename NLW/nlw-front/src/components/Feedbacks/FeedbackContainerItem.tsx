import { Link } from "react-router-dom";
import { Feedback } from "../App";

interface FeedbackContainerProps {
  feedback: Feedback;
}

export function FeedbackContainerItem({ feedback }: FeedbackContainerProps) {
  return (
    <div
      className="bg-contain max-w-sm bg-white rounded-lg border border-gray-500 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3 transition ease-in-out duration-200 hover:animate-pulse "
      style={{ backgroundImage: `url(${feedback.screenshot})` }}
    >
      <div className="p-5 ">
        <Link to="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-blue-500 dark:text-white ">
            {`${feedback.type}`}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-blue-400 dark:text-gray-400">
          {`${feedback.comment}`}
        </p>
      </div>
    </div>
  );
}
