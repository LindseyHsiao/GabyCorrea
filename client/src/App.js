import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Testimonies from './pages/Testimonies';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/About" element={<About />}/>
      <Route path="/Testimonies" element={<Testimonies />}/>
      <Route path="/Contact" element={<Contact />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
