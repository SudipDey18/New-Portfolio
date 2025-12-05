import NavBar from "./components/myComp/NavBar";
import About from "./components/myComp/About";
import Projects from "./components/myComp/Projects";
import Header from "./components/myComp/Header";
import Skills from "./components/myComp/Skills";

function App() {
  return (
    <>
      <div
        className="bg-yellow-100 flex flex-col cursor-crosshair overflow-x-hidden min-w-[230px] pb-32"
        style={{ height: "100dvh", width: "100dvw" }}
      >
        {/* Nav Bar */}
        <NavBar />
        {/* Header */}
        <Header />
        {/* About */}
        <About />
        {/* Projects */}
        <Projects />
        {/* Skills */}
        <Skills />
      </div >
    </>
  );
}

export default App;
