import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'

function App() {
  return <>
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    <Footer />
  </>
}

export default App
