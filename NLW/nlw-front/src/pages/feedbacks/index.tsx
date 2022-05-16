import { useEffect, useState } from "react";
import { FeedbacksContainer } from "../../components/Feedbacks";
import { Navbar } from "../../components/Navbar";
import { NavButtonPropsImp } from "../../components/Navbar/NavButton";
import { api } from "../../lib/api";

export function FeedbacksPage() {
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
    try{
        const response = await api.get("feedbacks/all");
        setFeedbacks((previousFeedbacks) => {
            // necessary approach when a state update depends on the previous state data
            return previousFeedbacks.concat(response.data);
        });
        console.log(response.data.screenshot);
    }catch (e) {
        console.log(e);
    }
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
    </>
  );
}
