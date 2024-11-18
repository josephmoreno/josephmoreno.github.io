import { MantineProvider, DEFAULT_THEME, } from '@mantine/core';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Overview from './pages/Overview';

import Navbar from './components/Navbar';

import OldApp from './old/src/App';
import useNavbar from './stores/NavbarStore';

const App = () => {
  const ver: boolean = useNavbar((state: any) => state.old_ver);

  return (
    <>
      {ver
        ? <OldApp />
        : <MantineProvider theme={DEFAULT_THEME}>
            <div style={{ textAlign: 'center', }}>
              <Navbar />

              <BrowserRouter>
                <Routes>
                  <Route index element={<Overview />} />
                </Routes>
              </BrowserRouter>
            </div>
          </MantineProvider>
      }
    </>
  );
};

export default App;