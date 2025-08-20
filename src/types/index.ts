 export interface PanelParams {
  title?: string;
  content?: string;
  [key: string]: any;
}

export interface DockviewPanel {
  id: string;
  title: string;
  component: string;
  params?: PanelParams;
}