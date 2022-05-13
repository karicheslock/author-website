import Navbar from "./components/Navbar";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import SeasonedWitch from "./pages/SeasonedWitch";
import HauntingElloryMay from "./pages/HauntingElloryMay";
import Seer from "./pages/Seer";
import Spellbound from "./pages/Spellbound";
import Spirit from "./pages/Spirit";

function Dashboard() {
  return (
      <div className="container flex flex-col">
          <Navbar />
          <div className="flex justify-between">
            <LeftSidebar />
            <RightSidebar />
          </div>
          Dashboard
          <SeasonedWitch />
          <HauntingElloryMay />
          <Seer />
          <Spellbound />
          <Spirit />
      </div>
  )
}

export default Dashboard;