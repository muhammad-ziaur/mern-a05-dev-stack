import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import TechRoot from "./components/techroot/TechRoot";

function App() {
  return (
    <div className=" bg-[#F8FAFC]">
      <div className="container mx-auto">
        <NavBar />
        <Banner />
        <h1 className="text-left text-black">Title Title Title Title Title</h1>
        <p className="text-left text-black">Subtitle Subtitle Subtitle</p>
        <TechRoot />
      </div>
    </div>
  );
}

export default App;
