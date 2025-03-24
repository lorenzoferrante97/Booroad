import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../contexts/GlobalContext';
import { useEffect } from 'react';

export default function Viaggio() {
  const { id } = useParams();

  const { getViaggiatori, arrayViaggiatori } = useGlobalContext();

  useEffect(() => {
    getViaggiatori(id);
  }, []);

  return (
    <>
      <main>
        <h1>Viaggio 1</h1>
        {/* form ricerca */}
        <div>
          <form>
            <label htmlFor="ricercaViaggiatore">Cerca viaggiatore per cognome</label>
            <input name="ricercaViaggiatore" type="text" placeholder="cognome viaggiatore" />
            <button type="submit">Cerca</button>
          </form>
        </div>
        <div>
          <ul>
            {arrayViaggiatori.map((viaggiatore) => {
              const { id, nome, cognome } = viaggiatore;

              return (
                <li key={id}>
                  <p>
                    {nome} {cognome}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
