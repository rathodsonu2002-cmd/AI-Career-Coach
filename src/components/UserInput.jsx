import { useState } from "react";
import "./UserInput.css";
import Button from "./Button";
function UserInput() {
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
 const handleSubmit = (e) => {
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

  console.log("Career Assessment Data:", formData);

  setSubmitted(true);
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
  <div>
    <h3>Your Assessment</h3>

    <p>Name: {formData.name}</p>
    <p>Email: {formData.email}</p>
    <p>Career Goal: {formData.goal}</p>
    <p>Skills: {formData.skills}</p>
    <p>Education: {formData.education}</p>
    <p>Experience Level: {formData.experience}</p>
    <p>Career Interest: {formData.interest}</p>
  </div>
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