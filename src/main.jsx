import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './pages/home/App.jsx'
import GlobalStyle from './styles/global.jsx';


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
)
