import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import PaymentsPage from './pages/PaymentsPage';
import ProfilePage from './pages/ProfilePage';
import SchedulePage from './pages/SchedulePage';
import TrainersPage from './pages/TrainersPage';

const App = () => (
  <Router>
    <nav className="bg-gray-800 text-white p-4 flex justify-around">
      <Link to="/" className="hover:underline">Inicio</Link>
      <Link to="/profile" className="hover:underline">Perfil</Link>
      <Link to="/trainers" className="hover:underline">Entrenadores</Link>
      <Link to="/schedule" className="hover:underline">Horarios</Link>
      <Link to="/payments" className="hover:underline">Pagos</Link>
      <Link to="/admin" className="hover:underline">Administrador</Link>
    </nav>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/trainers" element={<TrainersPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/payments" element={<PaymentsPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  </Router>
);

export default App;
