import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import SeasonedWitch from './pages/SeasonedWitch';
import HauntingElloryMay from './pages/HauntingElloryMay';
import Seer from './pages/Seer';
import Spellbound from './pages/Spellbound';
import Spirit from './pages/Spirit';
import LycanSaga from './pages/LycanSaga';
import About from './pages/About';
import Contact from './pages/Contact';
import Newsletters from './components/Newsletters';
import MailChimpFormContainer from './components/MailChimpFormContainer';
import Newsletter1 from './newsletters/Newsletter1';
import Newsletter2 from './newsletters/Newsletter2';
import Newsletter3 from './newsletters/Newsletter3';
import Newsletter4 from './newsletters/Newsletter4';
import Newsletter5 from './newsletters/Newsletter5';
import Newsletter6 from './newsletters/Newsletter6';
import Newsletter7 from './newsletters/Newsletter7';
import Newsletter8 from './newsletters/Newsletter8';
import Newsletter9 from './newsletters/Newsletter9';

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
        <Route path="/lycan-saga" element={<LycanSaga />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newsletters" element={<Newsletters />} />
        <Route path="/subscribe" element={<MailChimpFormContainer />} />
        <Route path='/newsletter1' element={<Newsletter1 />} />
        <Route path='/newsletter2' element={<Newsletter2 />} />
        <Route path='/newsletter3' element={<Newsletter3 />} />
        <Route path='/newsletter4' element={<Newsletter4 />} />
        <Route path='/newsletter5' element={<Newsletter5 />} />
        <Route path='/newsletter6' element={<Newsletter6 />} />
        <Route path='/newsletter7' element={<Newsletter7 />} />
        <Route path='/newsletter8' element={<Newsletter8 />} />
        <Route path='/newsletter9' element={<Newsletter9 />} />
      </Routes>
    </Router>
  );
}

export default App;
