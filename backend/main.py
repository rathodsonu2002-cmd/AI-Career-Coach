from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    return {"message": "AI Career Coach Backend is running!"}