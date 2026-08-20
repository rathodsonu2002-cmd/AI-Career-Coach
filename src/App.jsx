import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Interview from "./pages/Interview";
import Dashboard from "./pages/Dashboard";
import Assessment from "./pages/Assessment";
import NotFound from "./pages/NotFound";
import AssessmentResultPage from "./pages/AssessmentResult";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/interview" element={<Interview />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/assessment" element={<Assessment />} />

      <Route
        path="/assessment-result"
        element={<AssessmentResultPage />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;