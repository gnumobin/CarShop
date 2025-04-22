import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import CtaForm from './components/CtaForm'

function App() {
  return <>
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    <CtaForm />
    <Footer />
  </>
}

export default App
