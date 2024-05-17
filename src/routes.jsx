import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home/App'
import About from './pages/pageAbout/About'
import AutoAjuda from './pages/autoAjuda/AutoAjuda'

export default function RoutesTelas() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/homepage" />} />
                <Route path="/homepage" element={<Home />} />
                <Route path="/autoajuda" element={<AutoAjuda />} />
                <Route path="/lermais" element={<About />} />
            </Routes>
        </Router>
    );
}
