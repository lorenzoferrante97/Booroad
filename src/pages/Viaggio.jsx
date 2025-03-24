import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";
import { useEffect } from "react";

export default function Viaggio() {
  const { id } = useParams();

  const {
    getViaggiatori,
    arrayViaggiatori,
    handleInput,
    viaggiatoreFiltrato,
    handleSubmit,
  } = useGlobalContext();

  useEffect(() => {
    getViaggiatori(id);
  }, []);

  return (
    <>
      <main>
        <h1>Viaggio 1</h1>
        {/* form ricerca */}
        <div>
          <form onSubmit={(e) => handleSubmit(e, arrayViaggiatori)}>
            <label htmlFor="ricercaViaggiatore">
              Cerca viaggiatore per cognome
            </label>
            <input
              name="ricercaViaggiatore"
              type="text"
              placeholder="cognome viaggiatore"
              value={viaggiatoreFiltrato}
              onChange={(e) => handleInput(e)}
            />
            <button type="submit">Cerca</button>
          </form>
        </div>
        <div>
          <ul>
            {arrayViaggiatori.map((viaggiatore) => {
              const { id: viaggiatoreId, nome, cognome } = viaggiatore;

              return (
                <li key={viaggiatoreId}>
                  <Link to={`/${id}/viaggiatori/${viaggiatoreId}`}>
                    {nome} {cognome}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
