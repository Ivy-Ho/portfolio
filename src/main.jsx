import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ScreenProvider from './contexts/screenContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ScreenProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ScreenProvider>
)
