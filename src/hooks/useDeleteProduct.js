import { deleteDoc, doc } from "firebase/firestore";
import { useEffect, useReducer, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase/firebaseConfig";

const initialState = {
  loading: null,
  error: null,
};

const deleteReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "DELETED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

function useDeleteProduct(docCollection) {
  const [response, dispatch] = useReducer(deleteReducer, initialState);

  //deal witch memory leak
  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  const deleteProduct = async (id) => {
    checkCancelBeforeDispatch({
      type: "LOADING",
    });
    try {
      const deletedDocument = await deleteDoc(doc(db, docCollection, id));
      toast.info("Deletado com sucesso!");
      checkCancelBeforeDispatch({
        type: "DELETED_DOC",
        payload: deletedDocument,
      });
    } catch (error) {
      checkCancelBeforeDispatch({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { deleteProduct, response };
}

export default useDeleteProduct;
