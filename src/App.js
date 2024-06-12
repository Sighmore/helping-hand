import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Theme } from '@radix-ui/themes';
import Home from "./Pages/Home"
import About from './Pages/About';
import Contact from './Pages/Contact';
import Volunteer from './Pages/Volunteer';
import Donate from './Pages/Donate';
import Blog from './Pages/Blog';


function App() {
  return (
    <Router>
    <Theme>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Volunteer" element={<Volunteer />} />
        <Route path="/Donate" element={<Donate />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      </Theme>
    </Router>
  );
}

export default App;