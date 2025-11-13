import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import QuemSomos from "./pages/QuemSomos";
import ProjectsPage from "./pages/Projetos";
import ProjetoExemplo from "./pages/ProjetoExemplo";

export default function App() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <BrowserRouter>
      <Header onOpenLogin={() => setLoginOpen(true)} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cadastro"
          element={<Cadastro onOpenLogin={() => setLoginOpen(true)} />}
        />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/projetos/backend" element={<ProjectsPage />} />
        <Route path="/projetos/backend/exemplo" element={<ProjetoExemplo />} />
      </Routes>
      <Footer />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </BrowserRouter>
  );
}
