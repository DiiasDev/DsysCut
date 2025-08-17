import React from 'react';
import './styles/App.css';

import Login from './pages/login'
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

