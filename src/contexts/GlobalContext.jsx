import { createContext, useContext } from 'react';
import { db } from '../data/db';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const value = {};

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
