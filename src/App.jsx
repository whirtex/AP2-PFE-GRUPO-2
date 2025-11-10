import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginModal from "./components/loginModal";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import QuemSomos from "./pages/QuemSomos";

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <BrowserRouter>
      <Header onOpenLogin={() => setLoginOpen(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
      </Routes>
      <Footer />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </BrowserRouter>
  );
}
