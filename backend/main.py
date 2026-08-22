from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google import genai
from dotenv import load_dotenv
import os

app = FastAPI()

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

class AssessmentData(BaseModel):
    name: str
    email: str
    goal: str
    skills: str
    education: str
    experience: str
    interest: str

career_recommendations = {
    "web-development": "Frontend Developer",
    "data-science": "Data Scientist",
    "ai-ml": "Machine Learning Engineer",
    "cyber-security": "Cyber Security Analyst",
    "cloud": "Cloud Engineer",
}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "AI Career Coach Backend is running!"}


@app.get("/api/test")
def test_api():
    return {
        "message": "Frontend connected to FastAPI successfully!"
    }
    
    
@app.post("/api/assessment")
def assessment(data: AssessmentData):
    recommended_career = career_recommendations.get(
        data.interest,
        "Career not found"
    )

    prompt = f"""
You are an AI Career Coach.

Analyze this user's profile:

Name: {data.name}
Goal: {data.goal}
Skills: {data.skills}
Education: {data.education}
Experience: {data.experience}
Interest: {data.interest}

Recommend the most suitable career for this user.
Give a short explanation in 2-3 sentences.
"""
    try:
        ai_response = client.models.generate_content(
            model="gemini-3.6-flash",
            contents=prompt
        )

        ai_recommendation = ai_response.text

    except Exception:
        ai_recommendation = (
            "AI recommendation is temporarily unavailable. "
            "Please use the career recommendation and skill analysis above."
        )
       

    return {
        "message": "Assessment processed successfully!",
        "recommendedCareer": recommended_career,
        "aiRecommendation": ai_recommendation,
        "data": data.model_dump()
    }