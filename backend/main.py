from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

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

    return {
        "message": "Assessment processed successfully!",
        "recommendedCareer": recommended_career,
        "data": data.model_dump()
    }