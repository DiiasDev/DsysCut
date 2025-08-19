import React from "react";
import "./Footer.css";

const Footer: React.FC = () => (
  <footer className="w-screen text-center text-xs text-[var(--color-text-secondary)] py-6 mt-8 border-t border-[var(--color-border)] px-4 md:px-8">
    &copy; {new Date().getFullYear()} BarbeariaPro. Todos os direitos reservados.
  </footer>
);

export default Footer;
