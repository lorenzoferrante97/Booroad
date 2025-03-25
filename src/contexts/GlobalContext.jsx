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

  // variabile booleana per errore nel caso in cui non si trovi nulla
  const [isFound, setIsFound] = useState(true);

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

    ricercaViaggiatore.length > 0 ? (setArrayViaggiatoriFiltrati(ricercaViaggiatore), setIsFound(true)) : setIsFound(false);
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

    ricercaViaggio ? (setOggettoViaggioFiltrato([ricercaViaggio]), setIsFound(true)) : setIsFound(false);
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
    setIsFound(true);
    getViaggiatori(id);
  };

  const resetViaggioFiltrato = () => {
    setViaggioFiltrato('');
    setIsFound(true);
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
    isFound,
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalProvider, useGlobalContext };
