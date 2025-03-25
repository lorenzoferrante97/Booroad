import { useParams, Link } from 'react-router-dom';
import { useGlobalContext } from '../contexts/GlobalContext';
import { useEffect } from 'react';

export default function Viaggio() {
  const { id } = useParams();

  const { getViaggiatori, arrayViaggiatoriFiltrati, handleInput, viaggiatoreFiltrato, handleSubmit, resetViaggiatoriFiltrati, isFound } = useGlobalContext();

  useEffect(() => {
    getViaggiatori(id);
  }, []);

  return (
    <main>
      <h1>Viaggio {id}</h1>
      {/* Form ricerca */}
      <div>
        <form onSubmit={(e) => handleSubmit(e)} className="mb-4">
          <label htmlFor="ricercaViaggiatore" className="form-label">
            Cerca viaggiatore per cognome
          </label>
          <div className="input-group">
            <input name="ricercaViaggiatore" type="text" placeholder="Cognome viaggiatore" value={viaggiatoreFiltrato} onChange={(e) => handleInput(e)} className="form-control" />
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-search"></i> Cerca
            </button>
            <button type="button" onClick={() => resetViaggiatoriFiltrati(id)} className="btn btn-secondary">
              <i className="bi bi-x"></i> Cancella
            </button>
          </div>
        </form>
      </div>
      <div>
        <ul>
          {!isFound ? (
            <li>Nessun viaggiatore trovato.</li>
          ) : (
            arrayViaggiatoriFiltrati?.map((viaggiatore) => {
              const { id: viaggiatoreId, nome, cognome } = viaggiatore;

              return (
                <li key={viaggiatoreId}>
                  <Link to={`/${id}/viaggiatori/${viaggiatoreId}`} className="viaggiatore-link">
                    {nome} {cognome}
                  </Link>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </main>
  );
}
