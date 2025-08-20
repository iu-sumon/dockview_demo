 import React from 'react';
import DockviewComponent from './components/DockviewComponent';
import Toolbar from './components/Toolbar';
import './app.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Toolbar />
      <div className="dockview-container">
        <DockviewComponent />
      </div>
    </div>
  );
};

export default App;
