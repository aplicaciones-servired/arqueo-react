import { useContext } from "react";
import { useState } from "react";
import { getArqueosRequest, getArqueoRequest } from "../api/arqueo.api";
import { ArqueoContext } from "../context/arqueoContext";

// eslint-disable-next-line react-refresh/only-export-components
export const useArqueo = () => {
  const contesxt = useContext(ArqueoContext);
  if (!contesxt) {
    throw new Error("ArqueoContext");
  }
  return contesxt;
};

export const ArqueoContextProvider = ({ children }) => {
  const [arqueos, setArqueos] = useState([]);

  async function loadArqueos() {
    const response = await getArqueosRequest();
    setArqueos(response.data);
  }


    const getArqueo = async (id) => {
      try {
        const response = await getArqueoRequest(id)
        return response.data;
      } catch (error) {
        console.error(error);
      }
    };


  return (
    <ArqueoContext.Provider value={{ arqueos, loadArqueos, getArqueo }}>
      {children}
    </ArqueoContext.Provider>
  );

}