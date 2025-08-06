import React from 'react'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import Layout from './layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'

function SceneRouter() {
  const location = useLocation()
  switch (location.pathname) {
    case '/about':
      return <About />
    case '/contact':
      return <Contact />
    default:
      return <Home />
  }
}

function App() {
  return (
    <Layout>
      <Router>
        <SceneRouter />
      </Router>
    </Layout>
  )
}

export default App
