import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/home/App'
import About from './pages/pageAbout/About'
import AutoAjuda from './pages/autoAjuda/AutoAjuda'
import Informacoes from './pages/informacoesTrans/Informacoes'
import TranstornosSintomas from './pages/Transtonos-Sintomas/Transtonos'
import CanaisDeAjuda from './pages/Canais-Ajuda/Canais'
import ArtigosDados from './pages/Artigos/DadosArtigos'
import GrupoApoio from './pages/Grupo-Apoio/Apoio'

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
                <Route path="/transtornosSintomas" element={<TranstornosSintomas />} />
                <Route path="/canaisAjuda" element={<CanaisDeAjuda />} />
                <Route path="/artigosDeDados" element={<ArtigosDados />} />
                <Route path="/gruposApoio" element={<GrupoApoio />} />
            </Routes>
        </Router>
    );
}
