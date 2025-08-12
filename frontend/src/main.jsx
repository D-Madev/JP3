import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, BrowserRouter } from 'react-router-dom'
import Inicio from "./pages/Inicio"
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Inicio />
    </Router>
  </StrictMode>
)
