import { useEffect, useState } from "react";
import { FeedbacksContainer } from "./components/FeedbacksContainer";
import { Navbar } from "./components/Navbar";
import { Widget } from "./components/Widget";
import { api } from "./lib/api";
// interface ButtonProps {
//   text?: string; // conditional property
// }

// function Button(props: ButtonProps) {
//   console.log(props.text);
//   return <button className="bg-violet-500 px-4 h-10 rounded hover:bg-violet-700 transition-colors">{props.text ?? "Default"}</button>
// }

// function App() {
//   return (
//     <div className="flex gap-2">
//       <img src=""></img>
//       <Button text="Enviar"/>
//       <Button text="Ok"/>
//     </div>
//   );
// }
export interface Feedback {
  type: string;
  comment: string;
  screenshot?: string;
}

// export default App
export function App() {
  const [feedbacks, setFeedbacks] = useState([{type: '', comment: '', screenshot: ''}]);
  const [isWhiteTheme, setIsWhiteTheme] = useState(false);
  const [showFeedbacks, setShowFeedbacks] = useState(false);

  const fetchFeedbacks = async () => {
      const response = await api.get("feedbacks/all");
      setFeedbacks(response.data);
      console.log(response.data);
  }
  
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleThemeChange = () => {
    if (isWhiteTheme) {
      setIsWhiteTheme(false);
      document.documentElement.classList.add("dark");
    } else {
      setIsWhiteTheme(true);
      document.documentElement.classList.remove("dark");
    }
  };

  const handleShowFeedbacks = () => {
    if (showFeedbacks) {
      setShowFeedbacks(false);
      console.log("Not showing");
    }else {
      setShowFeedbacks(true);
      console.log("Showing");
    }
  };

  return (
    <>
      <Navbar
        onShowFeedbacksClicked={handleShowFeedbacks}
        onSwitchThemeClicked={handleThemeChange}
        whiteThemeOn={isWhiteTheme}
      />
      <FeedbacksContainer feedbacks={feedbacks} showFeedbacks={showFeedbacks}/>
      <Widget />
    </>
  );
}
