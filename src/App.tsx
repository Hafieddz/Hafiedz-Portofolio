import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Project from "./components/Project";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <div className="w-full text-white">
      <div className="overflow-hidden">
        <Hero />
        <Overview />
      </div>
      <Experience />
      <Project />
      <Analytics />
    </div>
  );
}

export default App;
