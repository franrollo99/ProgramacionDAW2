import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Tablero from './Tablero.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tablero />
  </StrictMode>,
)
