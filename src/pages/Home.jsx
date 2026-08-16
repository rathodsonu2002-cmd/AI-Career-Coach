import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Counter from "../components/Counter";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Link to="/assessment">
  Start Career Assessment
</Link>
      <Counter />
    </>
  );
}

export default Home;