import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Papa from './components/papa'
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {<Papa>
      <p>Paco lleva a los hijos al cole</p>
      <p>Como no lo hagas te enteras</p>
      <p>Y pon la lavadora</p>
    </Papa>}
  </StrictMode>,
)
