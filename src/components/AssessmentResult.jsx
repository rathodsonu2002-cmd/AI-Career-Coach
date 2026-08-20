function AssessmentResult({ formData }) {
 const careerRecommendations = {
  "web-development": "Frontend Developer",
  "data-science": "Data Scientist",
  "ai-ml": "Machine Learning Engineer",
  "cyber-security": "Cyber Security Analyst",
  cloud: "Cloud Engineer",
};

const recommendedCareer =
  careerRecommendations[formData.interest] || "Career not found";
 const userSkills = formData.skills
  .toLowerCase()
  .split(/[,\s]+/)
  .map((skill) => skill.trim())
  .filter((skill) => skill !== "");

  const careerSkills = {
  "web-development": [
    "html",
    "css",
    "javascript",
    "react",
  ],

  "data-science": [
    "python",
    "pandas",
    "numpy",
    "statistics",
  ],

  "ai-ml": [
    "python",
    "machine learning",
    "deep learning",
  ],

  "cyber-security": [
    "networking",
    "linux",
    "security",
    "ethical hacking",
  ],

  cloud: [
    "linux",
    "networking",
    "aws",
    "azure",
  ],
};

const requiredSkills = careerSkills[formData.interest] || [];

const matchingSkills = userSkills.filter((skill) =>
  requiredSkills.includes(skill)
);
const missingSkills = requiredSkills.filter(
  (skill) => !userSkills.includes(skill)
);

const skillMatchScore =
  requiredSkills.length > 0
    ? Math.round(
        (matchingSkills.length / requiredSkills.length) * 100
      )
    : 0;

    let matchLevel = "";

if (skillMatchScore >= 80) {
  matchLevel = "Strong Match";
} else if (skillMatchScore >= 50) {
  matchLevel = "Good Match";
} else {
  matchLevel = "Needs Improvement";
}
let recommendationMessage = "";

if (skillMatchScore >= 80) {
  recommendationMessage = "You are well prepared for this career.";
} else if (skillMatchScore >= 50) {
  recommendationMessage = "You have a good foundation, but some skills need improvement.";
} else {
  recommendationMessage = "You should build the required skills before pursuing this career.";
}
    

  let careerReason = "";

  if (formData.interest === "web-development") {
    careerReason =
      "Your interest in web development makes Frontend Development a suitable career path for you.";
  } else if (formData.interest === "data-science") {
    careerReason =
      "Your interest in data and analytics makes Data Science a suitable career path for you.";
  } else if (formData.interest === "ai-ml") {
    careerReason =
      "Your interest in AI and Machine Learning makes this a suitable career path for you.";
  } else if (formData.interest === "cyber-security") {
    careerReason =
      "Your interest in security and technology makes Cyber Security a suitable career path for you.";
  } else if (formData.interest === "cloud") {
    careerReason =
      "Your interest in cloud technologies makes Cloud Computing a suitable career path for you.";
  }

  let roadmap = [];

  if (formData.interest === "web-development") {
    roadmap = [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Git & GitHub",
      "Build Projects",
    ];
  } else if (formData.interest === "data-science") {
    roadmap = [
      "Python",
      "NumPy & Pandas",
      "Statistics",
      "Machine Learning",
      "Data Science Projects",
    ];
  } else if (formData.interest === "ai-ml") {
    roadmap = [
      "Python",
      "NumPy & Pandas",
      "Machine Learning",
      "Deep Learning",
      "AI Projects",
    ];
  } else if (formData.interest === "cyber-security") {
    roadmap = [
      "Computer Networks",
      "Linux",
      "Security Basics",
      "Ethical Hacking",
      "Security Projects",
    ];
  } else if (formData.interest === "cloud") {
    roadmap = [
      "Linux",
      "Networking",
      "Cloud Basics",
      "AWS / Azure",
      "Cloud Projects",
    ];
  }

  return (
    <section>
      <h2>Career Assessment Result</h2>

      <div>
        <h3>Your Profile</h3>

        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Career Goal: {formData.goal}</p>
        <p>Skills: {formData.skills}</p>
        <p>Education: {formData.education}</p>
        <p>Experience Level: {formData.experience}</p>
        <p>Career Interest: {formData.interest}</p>
      </div>

      <div>
  <h3>Recommended Career</h3>

  <p>{recommendedCareer}</p>

  <p>
    Skill Match Score: {skillMatchScore}%
  </p>

  <p>
    Match Level: {matchLevel}
  </p>

  <div className="recommendation">
    <h3>Recommendation</h3>
    <p>{recommendationMessage}</p>
  </div>
</div>
      <div>
  <h4>Matching Skills</h4>

  <p>
    {matchingSkills.length > 0
      ? matchingSkills.join(", ")
      : "No matching skills yet"}
  </p>
</div>

<div>
  <h4>Skills to Learn</h4>

  <p>
    {missingSkills.length > 0
      ? missingSkills.join(", ")
      : "You have all required skills"}
  </p>
</div>

      <div>
        <h3>Why this career?</h3>

        <p>{careerReason}</p>
      </div>

      <div>
        <h3>Learning Roadmap</h3>

        <ol>
          {roadmap.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default AssessmentResult;