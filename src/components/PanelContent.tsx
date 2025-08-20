import React from 'react';

interface PanelContentProps {
  params?: {
    title?: string;
    content?: string;
  };
}

const PanelContent: React.FC<PanelContentProps> = ({ params }) => {
  return (
    <div style={{ padding: '20px', color: '#cccccc', height: '100%', background: '#1e1e1e' }}>
      <h2 style={{ marginBottom: '16px', color: '#ffffff' }}>{params?.title || 'Default Title'}</h2>
      <p>{params?.content || 'Default content goes here.'}</p>
    </div>
  );
};

export default PanelContent;
