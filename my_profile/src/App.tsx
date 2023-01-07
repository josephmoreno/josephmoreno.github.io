import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import DefaultLayout from "./components/layouts/DefaultLayout";
import { GeneratedRoutes } from "./routes/GeneratedRoutes";

import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          {GeneratedRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;