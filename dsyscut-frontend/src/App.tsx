import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import "./styles/theme.css"

import Login from './pages/LoginPage/login'
import FinanceiroPage from "./pages/FinanceiroPage/financeiroPage";
import HomePage from "./pages/homePage/homePage";
import AgendamentosPage from "../src/pages/AgendamentoPage/agendamentoPage";
import ClientesPage from "./pages/ClientePage/clientePage";
import RelatoriosPage from "./pages/RelatorioPage/relatorioPage";
import Sidebar, { SidebarTab } from './components/Sidebar/Sidebar';
import { useAppStore } from './store/store';

function App() {
  const isLogged = useAppStore(state => state.isLogged)
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState<SidebarTab>("home");

  const sidebarWidth = sidebarOpen ? 256 : 80; // px

  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", background: "#f6f9ff" }}>
        {!isLogged && <Login />}
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
                marginLeft: `${sidebarWidth}px`,
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


