import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './estilo.css'
// En React puedo importar con un alias exportaciones por defecto
// En caso de hacer exportaciones por nombre debo importarlas con su nombre original sin alias, y envueltas en llaves
import App from './Gestor de tareas/listaTareas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
