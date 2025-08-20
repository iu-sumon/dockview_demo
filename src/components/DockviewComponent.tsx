import React, { useEffect, useRef } from 'react';
import { DockviewReact, DockviewReadyEvent } from 'dockview';
import { v4 as uuidv4 } from 'uuid';
import PanelContent from './PanelContent';
import { DockviewHeaderControls } from './DockviewHeaderControls';

const DockviewComponent: React.FC = () => {
  const dockviewRef = useRef<any>(null);

  const onReady = (event: DockviewReadyEvent) => {
    dockviewRef.current = event;

    // Add initial panels
    const panel1 = event.api.addPanel({
      id: uuidv4(),
      component: 'panelContent',
      title: 'Panel 1',
      params: { title: 'First Panel', content: 'Welcome to Dockview!' }
    });

    const panel2 = event.api.addPanel({
      id: uuidv4(),
      component: 'panelContent',
      title: 'Panel 2',
      position: { direction: 'right' },
      params: { title: 'Second Panel', content: 'This is another panel.' }
    });

    const panel3 = event.api.addPanel({
      id: uuidv4(),
      component: 'panelContent',
      title: 'Panel 3',
      position: { direction: 'below' },
      params: { title: 'Third Panel', content: 'You can drag and resize panels!' }
    });
  };

  const addPanel = () => {
    if (dockviewRef.current) {
      dockviewRef.current.api.addPanel({
        id: uuidv4(),
        component: 'panelContent',
        title: `Panel ${dockviewRef.current.api.panels.length + 1}`,
        params: { 
          title: `New Panel ${dockviewRef.current.api.panels.length + 1}`,
          content: 'This is a dynamically added panel.'
        }
      });
    }
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '10px', background: '#e4e4e9ff', display: 'flex', gap: '10px' }}>
        <button onClick={addPanel} style={{ padding: '8px 16px', background: '#007acc', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Panel
        </button>
      </div>
      <div style={{ flex: 1 }}>
        <DockviewReact
          onReady={onReady}
          components={{
            panelContent: PanelContent
          }}
          rightHeaderActionsComponent={DockviewHeaderControls}
          className="dockview-theme-light"
        />
      </div>
    </div>
  );
};

export default DockviewComponent;