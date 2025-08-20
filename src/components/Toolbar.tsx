 import React from 'react';

const Toolbar: React.FC = () => {
  return (
    <div style={{ 
      padding: '10px 20px', 
      background: '#2d2d30', 
      color: 'white', 
      borderBottom: '1px solid #3e3e42',
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    }}>
      <h1 style={{ margin: 0, fontSize: '18px', fontWeight: 'normal' }}>Dockview Demo</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <span style={{ color: '#cccccc' }}>React + TypeScript + Dockview</span>
      </div>
    </div>
  );
};

export default Toolbar;