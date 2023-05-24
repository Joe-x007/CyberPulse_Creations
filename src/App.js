import React from 'react';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;


