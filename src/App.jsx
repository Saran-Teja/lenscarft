import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <Router>
      <nav className="bg-gray-800 p-4 text-white flex justify-between">
        <Link to="/" className="font-bold text-xl">LensCraft</Link>
        <Link to="/admin" className="hover:underline">Admin Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}