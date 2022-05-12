import { useEffect, useState } from "react";
import { FeedbacksContainer } from "./components/Feedbacks";
import { Navbar } from "./components/Navbar";
import { NavButtonPropsImp } from "./components/Navbar/NavButton";
import { Widget } from "./components/Widget";
import { api } from "./lib/api";

export interface Feedback {
  type: string;
  comment: string;
  screenshot?: string;
}

// export default App
export function App() {
  const [feedbacks, setFeedbacks] = useState([
    { type: "", comment: "", screenshot: "" },
  ]);
  const [isWhiteTheme, setIsWhiteTheme] = useState(false);
  const [showFeedbacks, setShowFeedbacks] = useState(false);

  const fetchFeedbacks = async () => {
    const response = await api.get("feedbacks/all");
    setFeedbacks(response.data);
    console.log(response.data);
  };

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
    } else {
      setShowFeedbacks(true);
    }
  };

  const handleUpdateFeedbacks = async () => {
    const response = await api.get("feedbacks/all");
    setFeedbacks(response.data);
  };

  return (
    <>
      <Navbar
        navBarItems={[
          new NavButtonPropsImp("Show feedbacks", handleShowFeedbacks),
          new NavButtonPropsImp("Update feedbacks", handleUpdateFeedbacks),
        ]}
        onSwitchThemeClicked={handleThemeChange}
        whiteThemeOn={isWhiteTheme}
      />
      <div>
        <FeedbacksContainer
          feedbacks={feedbacks}
          showFeedbacks={showFeedbacks}
        />
      </div>
      <Widget />
    </>
  );
}
