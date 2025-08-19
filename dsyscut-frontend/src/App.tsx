import React from 'react';
import './index.css';

import Login from './pages/LoginPage/login'
import HomePage from './pages/homePage/homePage';
import { useAppStore } from './store/store';

function App() {
  const isLogged = useAppStore(state => state.isLogged)
  return (
    <div className="container">
      {!isLogged && <Login />}
      {isLogged && (
        <>
          <HomePage />
        </>
      )}
    </div>
  );
}

export default App;

