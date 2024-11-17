// import { MantineProvider, DEFAULT_THEME } from '@mantine/core';
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';
import App from './App.tsx';

// import OldApp from './old/src/App';
// import useNavbar from './stores/NavbarStore';

// const ver: boolean = useNavbar((state: any) => state.old_ver);

createRoot(document.getElementById('root')!).render(
  // <MantineProvider theme={DEFAULT_THEME}>
    <App />
  // </MantineProvider>
  ,
);