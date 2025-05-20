// Envoltorio de codigo de React que facilita la depuracion en caso de error mostrando 
// mensajes detallados
import { StrictMode } from 'react'
// Motor de renderizado de react. Arranca el motor web y renderiza el primer nodo con
// la logica de la aplicacion
import { createRoot } from 'react-dom/client'
// Importamos la hoja de estilos en el archivo .jsx
// import './index.css'
// import App from './App.jsx'
import HolaMundo from './components/HolaMundo';

// Selecciono el contenedor en el que inyectar el nodo raiz
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <HolaMundo />
  </StrictMode>,
)
