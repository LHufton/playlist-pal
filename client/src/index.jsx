import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.querySelector('#root')
  if (rootElement) {
    createRoot(rootElement).render(
      <Router>
        <App />
      </Router>
    )
  } else {
    console.error('Root container not found')
  }
})
