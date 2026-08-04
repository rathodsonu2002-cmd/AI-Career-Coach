import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Dashboard from "./pages/Dashboard";
import Interview from "./pages/Interview";
import NotFound from "./pages/NotFound";
function App() {
  return (
   <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/resume" element={<Resume />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/interview" element={<Interview />} />
  <Route path="*" element={<NotFound />} />
</Routes>
  );
}

export default App;