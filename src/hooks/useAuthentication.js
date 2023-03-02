import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

//hooks
import { useEffect, useState } from "react";

import { toast } from "react-toastify";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  //cleanUP
  //deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkedIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  //logout - sign Out

  const logout = () => {
    toast.info("Desconectado!");
    checkedIsCancelled();
    signOut(auth);
  };

  //login - sign In

  const login = async (data) => {
    checkedIsCancelled();
    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Usuário identificado!");
      setLoading(false);
    } catch (error) {
      let systemErrorMessage;

      if (error.message.includes("user-not-found")) {
        toast.error("Usuário não identificado!");
      } else if (error.message.includes("wrong-password")) {
        toast.error("A senha incorreta");
      } else {
        toast.error("Ocorreu um Erro, por favor tente novamente mais tarde");
      }
      setError(systemErrorMessage);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { auth, error, loading, logout, login };
};
