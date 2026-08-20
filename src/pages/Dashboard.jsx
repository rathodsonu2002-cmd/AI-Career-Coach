import Navbar from "../components/Navbar";
import { useState } from "react";

function Dashboard() {
  const [assessmentData] = useState(() => {
    const savedData = localStorage.getItem("assessmentData");

    return savedData ? JSON.parse(savedData) : null;
  });

  const careerRecommendations = {
    "web-development": "Frontend Developer",
    "data-science": "Data Scientist",
    "ai-ml": "Machine Learning Engineer",
    "cyber-security": "Cyber Security Analyst",
    cloud: "Cloud Engineer",
  };

  return (
    <>
      <Navbar />

      <main>
        <h1>Career Dashboard</h1>

        <p>
          Track your career journey and learning progress.
        </p>

        <section>
          <h2>Career Overview</h2>

          <p>
            Career Goal:{" "}
            {assessmentData?.goal || "Not available"}
          </p>

          <p>
            Recommended Career:{" "}
            {careerRecommendations[assessmentData?.interest] ||
              "Not available"}
          </p>

          <p>
            Experience Level:{" "}
            {assessmentData?.experience || "Not available"}
          </p>
        </section>

        <section>
          <h2>Learning Progress</h2>

          <p>HTML & CSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Git & GitHub</p>
          <p>Projects</p>
        </section>
      </main>
    </>
  );
}

export default Dashboard;