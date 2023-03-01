import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from "hooks/useAuthentication";
import Admin from "pages/admin/Admin";
import Home from "pages/home/Home";
import Login from "pages/login/Login";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

function Router() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  const loadingUser = user === undefined;

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  function ProtectedRoutes() {
    if (!user) {
      <h1>Usuário não está logado</h1>;
    }

    return user ? <Outlet /> : <Navigate to="/login" />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/admin/produtos" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
