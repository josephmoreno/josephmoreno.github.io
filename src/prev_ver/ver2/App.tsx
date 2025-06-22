import { MantineProvider, DEFAULT_THEME, } from '@mantine/core';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Overview from './pages/Overview';
import Navbar from '../../components/Navbar';

const App = () => {
  return (
    <App2 />
  );
};

export default App;

// -----

export const App2 = () => {
  return(
    <MantineProvider theme={DEFAULT_THEME} defaultColorScheme='dark'>
      <div style={{ textAlign: 'center', }}>
        <Navbar />

        <BrowserRouter>
          <Routes>
            <Route index element={<Overview />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MantineProvider>
  );
};