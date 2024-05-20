import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/home/App'
import About from './pages/pageAbout/About'
import AutoAjuda from './pages/autoAjuda/AutoAjuda'
import Informacoes from './pages/informacoesTrans/Informacoes'

export default function RoutesTelas() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Navigate to="/homepage" />} />
                <Route path="/homepage" element={<Home />} />
                <Route path="/autoajuda" element={<AutoAjuda />} />
                <Route path="/lermais" element={<About />} />
                <Route path="/info" element={<Informacoes />} />
            </Routes>
        </Router>
    );
}
