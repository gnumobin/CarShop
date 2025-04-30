import { Routes, Route } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
import CarPage from "./pages/CarPage";
import CarsPage from "./pages/CarsPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AlertPage from "./pages/AlertPage";
import Login from "./components/Panel/Login";

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
        <Route path="/panel" element={<Login />} />
      </Routes>
      <Footer />
      <ScrollUpButton />
    </>
  );
}

export default App;
