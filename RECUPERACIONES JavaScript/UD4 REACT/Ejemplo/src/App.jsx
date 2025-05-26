import { useState } from 'react';
import Hijo from './components/Hijo.jsx';
import './App.css';

function App() {

  const [mensaje, setMensaje] = useState('Esperando respuesta');

  const handlerClick = () => {
    setMensaje('Respuesta recibida');
  }

  return (
    <>
      <Hijo mensaje={mensaje} enviarMensaje={handlerClick}/>
    </>
  );
}

export default App;