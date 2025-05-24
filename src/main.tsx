import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { HelmetProvider } from 'react-helmet-async' // Import HelmetProvider

const container = document.getElementById('root')
if (!container) throw new Error('Failed to find the root element')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <HelmetProvider> {/* Add HelmetProvider here */}
      <App />
    </HelmetProvider> {/* Add HelmetProvider here */}
  </React.StrictMode>
)