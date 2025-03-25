import { createContext, useContext } from "react";
import db from "../data/db";
import { useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const { viaggi, viaggiatori } = db;
  const [arrayViaggi, setarrayViaggi] = useState(viaggi);
  const [arrayViaggiatori, setArrayViaggiatori] = useState(viaggiatori);
  const [arrayViaggiatoriFiltrati, setArrayViaggiatoriFiltrati] =
    useState(viaggiatori);

  const [viaggiatoreFiltrato, setViaggiatoreFiltrato] = useState("");

  const handleInput = (e) => {
    setViaggiatoreFiltrato(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!viaggiatoreFiltrato) {
      setArrayViaggiatoriFiltrati(arrayViaggiatori);
      return;
    }

    const ricercaViaggiatore = arrayViaggiatori.filter((viaggiatore) => {
      const v = viaggiatore.cognome.toLowerCase();
      const vFiltrato = viaggiatoreFiltrato.toLowerCase();
      return v.includes(vFiltrato);
    });

    console.log("ric viagg: ", ricercaViaggiatore);

    setArrayViaggiatoriFiltrati(ricercaViaggiatore);
  };

  const getViaggiatori = (id) => {
    const viaggiatoriFiltrati = arrayViaggiatori.filter((viaggiatore) => {
      return viaggiatore.id_viaggio === parseInt(id);
    });

    setArrayViaggiatoriFiltrati(viaggiatoriFiltrati);
  };

  const resetViaggiatoriFiltrati = (id) => {
    setViaggiatoreFiltrato("");
    getViaggiatori(id)
  };

  const value = {
    arrayViaggi,
    arrayViaggiatori,
    arrayViaggiatoriFiltrati,
    getViaggiatori,
    resetViaggiatoriFiltrati,
    viaggiatoreFiltrato,
    handleInput,
    handleSubmit,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
