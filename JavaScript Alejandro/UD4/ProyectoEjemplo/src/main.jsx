import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './estilo.css';
import AppEnrutador from "./routers/AppEnrutador.jsx";
import {SeguridadProvider} from './context/SeguridadProvider.jsx';
// En React puedo importar con un alias exportaciones por defecto
// En caso de hacer exportaciones por nombre debo importarlas con su nombre original sin alias, y envueltas en llaves

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <SeguridadProvider>
      <AppEnrutador />
    </SeguridadProvider>
  </StrictMode>
)
