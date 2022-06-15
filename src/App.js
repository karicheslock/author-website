import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import SeasonedWitch from './pages/SeasonedWitch';
import HauntingElloryMay from './pages/HauntingElloryMay';
import Seer from './pages/Seer';
import Spellbound from './pages/Spellbound';
import Spirit from './pages/Spirit';
import About from './pages/About';
import Contact from './pages/Contact';
import Newsletters from './components/Newsletters';
import MailChimpFormContainer from './components/MailChimpFormContainer';
import Newsletter1 from './newsletters/Newsletter1';
import Newsletter2 from './newsletters/Newsletter2';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/seasoned-witch" element={<SeasonedWitch />} />
        <Route path="/haunting-ellory-may" element={<HauntingElloryMay />} />
        <Route path="/seer" element={<Seer />} />
        <Route path="/spellbound" element={<Spellbound />} />
        <Route path="/spirit" element={<Spirit />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletters" element={<Newsletters />} />
        <Route path="/subscribe" element={<MailChimpFormContainer />} />
        <Route path='/newsletter1' element={<Newsletter1 />} />
        <Route path='/newsletter2' element={<Newsletter2 />} />
      </Routes>
    </Router>
  );
}

export default App;
