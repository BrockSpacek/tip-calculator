
import "./App.css";
import TipCard from "./components/TipCard";
import SplitterLogo from "./assets/logo.svg";

function App() {
  return (
    <div className="bg-[#c5e4e7] min-h-screen">
      <div className="flex justify-center">
        <img src={SplitterLogo} alt="Tip Logo" className=" mt-[80px] mb-10" />
      </div>

      <TipCard />
    </div>
  );
}

export default App;
