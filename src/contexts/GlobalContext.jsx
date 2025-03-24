import { createContext, useContext } from 'react';
import db from '../data/db';
import { useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const { viaggi, viaggiatori } = db;
  const [arrayViaggi, setarrayViaggi] = useState(viaggi);
  const [arrayViaggiatori, setArrayViaggiatori] = useState(viaggiatori);

  const getViaggiatori = (id) => {
    const viaggiatoriFiltrati = arrayViaggiatori.filter((viaggiatore) => {
      return viaggiatore.id_viaggio === parseInt(id);
    });

    setArrayViaggiatori(viaggiatoriFiltrati);
  };

  const value = { arrayViaggi, arrayViaggiatori, getViaggiatori };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
