import { Navigate } from "react-router";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Widget } from "./components/Widget";
import { FeedbacksPage } from "./pages/feedbacks";

export interface Feedback {
  type: string;
  comment: string;
  screenshot?: string;
}

// export default App
export function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={(<h1>Home Page</h1>)} />
        <Route path="/feedbacks" element={<FeedbacksPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  <Widget />
  </>
  );
}
