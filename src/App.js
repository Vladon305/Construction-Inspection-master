import { useEffect } from 'react'
import Layout from './components/Layout/Layout'
import './App.scss'
import { useNavigate, Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/about')
  }, [])

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
