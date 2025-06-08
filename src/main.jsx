import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FirebaseProvider } from './context/firebase.jsx' // ✅ import your context provider
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider> {/* ✅ Wrap App in provider */}
      <App />
    </FirebaseProvider>
  </React.StrictMode>
)
