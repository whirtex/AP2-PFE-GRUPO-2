import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import LoginModal from "./LoginModal";

export default function Layout({ children }) {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <Header onOpenLogin={() => setLoginOpen(true)} />
      {children}
      <Footer />
      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
