import { createContext, useContext } from 'react';
import db from '../data/db';
import { useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const { viaggi, viaggiatori } = db;
  const [arrayViaggi, setarrayViaggi] = useState(viaggi);
  const [arrayViaggiatori, setArrayViaggiatori] = useState(viaggiatori);
  const [arrayViaggiatoriFiltrati, setArrayViaggiatoriFiltrati] = useState(viaggiatori);
  const [oggettoViaggioFiltrato, setOggettoViaggioFiltrato] = useState(viaggi);

  const [viaggiatoreFiltrato, setViaggiatoreFiltrato] = useState('');
  const [viaggioFiltrato, setViaggioFiltrato] = useState('');

  const handleInput = (e) => {
    setViaggiatoreFiltrato(e.target.value);
  };

  const handleInputViaggio = (e) => {
    setViaggioFiltrato(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!viaggiatoreFiltrato) {
      setArrayViaggiatoriFiltrati(arrayViaggiatori);
      // return;
    }

    const ricercaViaggiatore = arrayViaggiatori.filter((viaggiatore) => {
      const v = viaggiatore.cognome.toLowerCase();
      const vFiltrato = viaggiatoreFiltrato.toLowerCase();
      return v.includes(vFiltrato);
    });

    setArrayViaggiatoriFiltrati(ricercaViaggiatore);
  };

  const handleSubmitViaggio = (e) => {
    e.preventDefault();

    // if (!viaggioFiltrato) {
    //   setArrayViaggiatoriFiltrati(arrayViaggiatori);
    //   // return;
    // }

    const ricercaViaggio = arrayViaggi.find((viaggio) => {
      const id = parseInt(viaggio.id);
      return id === parseInt(viaggioFiltrato);
    });

    setOggettoViaggioFiltrato([ricercaViaggio]);
  };

  const filterViaggi = () => {};

  const getViaggiatori = (id) => {
    const viaggiatoriFiltrati = arrayViaggiatori.filter((viaggiatore) => {
      return viaggiatore.id_viaggio === parseInt(id);
    });

    setArrayViaggiatoriFiltrati(viaggiatoriFiltrati);
  };

  const resetViaggiatoriFiltrati = (id) => {
    setViaggiatoreFiltrato('');
    getViaggiatori(id);
  };

  const resetViaggioFiltrato = () => {
    setViaggioFiltrato('');
    setOggettoViaggioFiltrato(viaggi);
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
    filterViaggi,
    handleInputViaggio,
    viaggioFiltrato,
    handleSubmitViaggio,
    oggettoViaggioFiltrato,
    resetViaggioFiltrato,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
