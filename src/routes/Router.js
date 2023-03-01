import { AuthProvider } from "context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from "hooks/useAuthentication";
import Admin from "pages/admin/Admin";
import Home from "pages/home/Home";
import Login from "pages/login/Login";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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

  return (
    <AuthProvider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={!user ? <Login /> : <Admin />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Router;
