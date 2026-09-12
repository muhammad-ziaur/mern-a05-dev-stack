import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import TechRoot from "./components/techroot/TechRoot";
import TechTitle from "./components/TechTitle";

function App() {
  return (
    <div className=" bg-[#F8FAFC]">
      <NavBar />
      <Banner />
      <TechTitle />
      <TechRoot />
    </div>
  );
}

export default App;
