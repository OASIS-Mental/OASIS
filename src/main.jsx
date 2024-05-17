import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './pages/home/App.jsx'
import About from './pages/pageAbout/About.jsx'
import GlobalStyle from './styles/global.jsx';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <About />
    <GlobalStyle />
  </React.StrictMode>,
)
