import React, { useState } from 'react';
import './index.css';
import "./styles/theme.css"

import Login from './pages/LoginPage/login'
import HomePage from './pages/homePage/homePage';
import Sidebar, { SidebarTab } from './components/Sidebar/Sidebar';
import { useAppStore } from './store/store';

function App() {
  const isLogged = useAppStore(state => state.isLogged)
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedTab, setSelectedTab] = useState<SidebarTab>("home");

  const sidebarWidth = sidebarOpen ? 256 : 80; // px

  return (
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
            <HomePage />
          </div>
        </>
      )}
    </div>
  );
}

export default App;


