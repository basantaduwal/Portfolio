import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Hero/Hero.css'
import './About/About.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)