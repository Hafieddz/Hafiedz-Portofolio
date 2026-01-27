import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Project from "./components/Project";

function App() {
  return (
    <div className="w-full text-white">
      <div className="overflow-hidden">
        <Hero />
        <Overview />
      </div>
      <Experience />
      <Project />
      <div className="h-[300vh] bg-neutral-200"></div>
    </div>
  );
}

export default App;
