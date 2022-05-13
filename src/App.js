import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import SeasonedWitch from './pages/SeasonedWitch';
import HauntingElloryMay from './pages/HauntingElloryMay';
import Seer from './pages/Seer';
import Spellbound from './pages/Spellbound';
import Spirit from './pages/Spirit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/seasoned-witch" element={<SeasonedWitch />} />
        <Route path="/haunting-ellory-may" element={<HauntingElloryMay />} />
        <Route path="/seer" element={<Seer />} />
        <Route path="/spellbound" element={<Spellbound />} />
        <Route path="/spirit" element={<Spirit />} />
      </Routes>
    </Router>
  );
}

export default App;
