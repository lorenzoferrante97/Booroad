import { createContext, useContext } from 'react';
import db  from '../data/db';
import { useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const {viaggi, viaggiatori} = db;

  const value = {viaggi};

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
