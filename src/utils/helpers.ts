 import { v4 as uuidv4 } from 'uuid';

export const generateId = (): string => {
  return uuidv4();
};

export const createPanelData = (title: string, content: string, component: string = 'panelContent') => {
  return {
    id: generateId(),
    title,
    component,
    params: { title, content }
  };
};