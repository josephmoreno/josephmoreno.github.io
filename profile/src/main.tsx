// import { MantineProvider, DEFAULT_THEME } from '@mantine/core';
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <App />
  ,
);