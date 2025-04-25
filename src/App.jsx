import { Routes, Route } from "react-router";
import Footer from "./components/Footer";
import CtaForm from "./components/CtaForm";
import Header from "./components/Header";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import CarPage from "./pages/CarPage";
import CarsPage from "./pages/CarsPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AlertPage from "./pages/AlertPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/car/:id" element={<CarPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/alert" element={<AlertPage />} />
      </Routes>
      <Footer />
      <ScrollUpButton />
    </>
  );
}

export default App;
