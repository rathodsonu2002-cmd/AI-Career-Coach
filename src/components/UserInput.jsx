import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserInput.css";
import Button from "./Button";
import AssessmentResult from "./AssessmentResult";

function UserInput() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    goal: "",
    skills: "",
    education: "",
    experience: "",
    interest: "",
  });
const [submitted, setSubmitted] = useState(false);
 const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.goal ||
    !formData.skills ||
    !formData.education ||
    !formData.experience ||
    !formData.interest
  ) {
    alert("Please fill in all the fields.");
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/api/assessment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    console.log("Backend Response:", result);

    localStorage.setItem("assessmentData", JSON.stringify(formData));
    localStorage.setItem(
      "recommendedCareer",
      result.recommendedCareer
    );

    setSubmitted(true);

 navigate("/assessment-result", {
  state: {
    formData,
    recommendedCareer: result.recommendedCareer,
    aiRecommendation: result.aiRecommendation,
  },
});
  } catch (error) {
    console.error("Error submitting assessment:", error);
    alert("Unable to connect to backend.");
  }
};
const handleReset = () => {
  setFormData({
    name: "",
    email: "",
    goal: "",
    skills: "",
    education: "",
    experience: "",
    interest: "",
  });

  setSubmitted(false);
};

  return (
    <section>
      <h2>Career Assessment</h2>

      <p>
        Tell us about yourself so we can understand your career goals.
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            placeholder="Enter your email"
          />
        </div>

       <div>
  <label>Career Goal</label>

  <textarea
    value={formData.goal}
    onChange={(e) =>
      setFormData({
        ...formData,
        goal: e.target.value,
      })
    }
    placeholder="Example: I want to become a Frontend Developer"
  />
</div>

        <div>
          <label>Skills</label>
          <input
            type="text"
            value={formData.skills}
            onChange={(e) =>
              setFormData({
                ...formData,
                skills: e.target.value,
              })
            }
            placeholder="Example: HTML, CSS, JavaScript"
          />
        </div>

        <div>
          <label>Education</label>
          <input
            type="text"
            value={formData.education}
            onChange={(e) =>
              setFormData({
                ...formData,
                education: e.target.value,
              })
            }
            placeholder="Example: MCA, B.Tech, BCA"
          />
        </div>

        <div>
          <label>Experience Level</label>

          <select
            value={formData.experience}
            onChange={(e) =>
              setFormData({
                ...formData,
                experience: e.target.value,
              })
            }
          >
            <option value="">Select your level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div>
          <label>Career Interest</label>

          <select
            value={formData.interest}
            onChange={(e) =>
              setFormData({
                ...formData,
                interest: e.target.value,
              })
            }
          >
            <option value="">Select your interest</option>
            <option value="web-development">Web Development</option>
            <option value="data-science">Data Science</option>
            <option value="ai-ml">AI / Machine Learning</option>
            <option value="cyber-security">Cyber Security</option>
            <option value="cloud">Cloud Computing</option>
          </select>
        </div>

       <Button text="Submit Assessment" type="submit" />
      </form>
{submitted && (
  <p>
    Assessment submitted successfully!
  </p>
  
)}
{submitted && (
  <AssessmentResult formData={formData} />
)}
<Button
  text="Reset Assessment"
  type="button"
  onClick={handleReset}
/>

    </section>
  );
}

export default UserInput;