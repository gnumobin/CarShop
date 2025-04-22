import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import CtaForm from "./components/CtaForm";
import Header from "./components/Header";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <CtaForm />
      <Footer />
      <ScrollUpButton />
    </>
  );
}

export default App;
