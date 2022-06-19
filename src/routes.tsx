import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Agents from './pages/Agents';


const Routess: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Navigate to="/agents" />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agents/:id" element={<h1>agent especifico</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routess;
