import "./Hero.css";
import heroImg from "../assets/hero.png";
import Button from "./Button";
function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">
        <h1>Crack Your Dream Job with AI</h1>

        <p>
          Build your resume, prepare for interviews, and track your placement
          journey using AI.
        </p>

        <div className="buttons">
          <Button text="Get Started" />
<Button text="Learn More" type="secondary" />
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImg} alt="Hero" />
      </div>

    </section>
  );
}

export default Hero;