//COMPONENTES
import Navbar from './components/Navbar';
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import AboutExtend from './components/AboutExtend';
import Works from './components/Works';
//ESTILO
import './scss/main.scss';
//REACT-ROUTER
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Header /><About /><Portfolio /></>} />
        <Route path="sobreMi" element={<AboutExtend />} />
        <Route path="trabajos" element={<Works />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
