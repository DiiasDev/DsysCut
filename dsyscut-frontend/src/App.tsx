import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import "./styles/theme.css"
import { useTheme } from "./ThemeContext";

import Login from './pages/LoginPage/login'
import FinanceiroPage from "./pages/FinanceiroPage/financeiroPage";
import HomePage from "./pages/homePage/homePage";
import AgendamentosPage from "../src/pages/AgendamentoPage/agendamentoPage";
import ClientesPage from "./pages/ClientePage/clientePage";
import RelatoriosPage from "./pages/RelatorioPage/relatorioPage";
import Sidebar, { SidebarTab } from './components/Sidebar/Sidebar';

import SessionTimeout from './hooks/SessionTimeout';
import { useAppStore } from './store/store';

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);
  return matches;
}

function App() {
  // Persistência do login
  const [isLogged, setIsLogged] = useState(() => {
    const stored = localStorage.getItem("isLogged");
    return stored === "true";
  });

  // Persistência da tab selecionada
  const [selectedTab, setSelectedTab] = useState<SidebarTab>(() => {
    return (localStorage.getItem("selectedTab") as SidebarTab) || "home";
  });

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { theme } = useTheme();
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Atualiza tema globalmente
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Salva tab selecionada no localStorage
  useEffect(() => {
    localStorage.setItem("selectedTab", selectedTab);
  }, [selectedTab]);

  // Salva login no localStorage
  useEffect(() => {
    localStorage.setItem("isLogged", String(isLogged));
  }, [isLogged]);

  // Navega para a rota da tab selecionada ao iniciar
  const tabRoutes: Record<SidebarTab, string> = {
    home: "/",
    financeiro: "/financeiro",
    agendamentos: "/agendamentos",
    clientes: "/clientes",
    relatorios: "/relatorios",
    configuracoes: "/"
  };

  // Navega para a rota correta ao iniciar
  useEffect(() => {
    if (isLogged) {
      window.history.replaceState(null, "", tabRoutes[selectedTab] || "/");
    }
  }, [isLogged, selectedTab]);

  const sidebarWidth = sidebarOpen ? 256 : 80; // px

  return (
    <BrowserRouter>
      <SessionTimeout />
      <div
        style={{
          minHeight: "100vh",
          background: "var(--color-bg)",
        }}
      >
        {!isLogged && <Login onLogin={() => setIsLogged(true)} />}
        {isLogged && (
          <>
            <Sidebar
              open={sidebarOpen}
              onToggle={setSidebarOpen}
              selectedTab={selectedTab}
              onSelectTab={setSelectedTab}
            />
            <div
              className="transition-all duration-300"
              style={{
                marginLeft: isMobile ? 0 : `${sidebarWidth}px`,
                minHeight: "100vh",
                width: "auto",
                overflowX: "hidden"
              }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/financeiro" element={<FinanceiroPage />} />
                <Route path="/agendamentos" element={<AgendamentosPage />} />
                <Route path="/clientes" element={<ClientesPage />} />
                <Route path="/relatorios" element={<RelatoriosPage />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;


