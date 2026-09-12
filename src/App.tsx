import Banner from "./components/Banner";
import LowerFooter from "./components/LowerFooter";
import NavBar from "./components/NavBar";
import TechRoot from "./components/techroot/TechRoot";
import TechTitle from "./components/TechTitle";
import UpperFooter from "./components/UpperFooter";

function App() {
  return (
    <div className=" bg-[#F8FAFC]">
      <NavBar />
      <Banner />
      <TechTitle />
      <TechRoot />
      <UpperFooter />
      <LowerFooter />
    </div>
  );
}

export default App;
