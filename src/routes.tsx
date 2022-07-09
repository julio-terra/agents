import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Agent from './pages/Agent';
import Agents from './pages/Agents';

const Routess: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Navigate to="/agents" />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agent/:id" element={<Agent />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routess;
