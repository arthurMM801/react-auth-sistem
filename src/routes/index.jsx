import { lazy } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import PrivateRoute from './Route';

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.jsx"));
const Login = lazy(() => import("../views/Login"));

// Crie as rotas privadas para que não possam ser acessadas sem logar
export default function Rotas() {
  return (
    <Routes>
      <Route element={<FullLayout/>}>
        <Route exact path="/login" element={<Login />} />
        <Route
          path="/"
          element={<PrivateRoute component={Outlet} />}
        />
        <Route
          path="/1"
          element={<PrivateRoute component={Outlet} />}
        />
        <Route
          path="/2"
          element={<PrivateRoute component={Outlet} />}
        />
        <Route
          path="/3"
          element={<PrivateRoute component={Outlet} />}
        />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Route>
    </Routes>
  );
}
