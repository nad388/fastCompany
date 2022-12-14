import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './layouts/login';
import Main from './layouts/main';
import Users from './layouts/users';
import NavBar from './components/ui/navBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/users/*" element={<Users />} />
        <Route path="/users/:userId" element={<Users />} />
        <Route path="/users/:userId/:edit" element={<Users />} />
        <Route path="/login/:type" element={<Login />} />
        <Route path="/login/*" element={<Login />} />
        <Route exact path="/" element={<Main />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
