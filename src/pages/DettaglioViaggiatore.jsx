import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function DettaglioViaggiatore() {
  const { id } = useParams();
  const { arrayViaggiatori } = useGlobalContext();

  const viaggiatore = arrayViaggiatori.find((v) => v.id === parseInt(id));

  if (!viaggiatore) {
    return (
      <main>
        <h1>Viaggiatore non trovato</h1>
      </main>
    );
  }

  const { nome, cognome, mail, data_nascita, codice_fiscale, id_viaggio } =
    viaggiatore;

  return (
    <main>
      <h1>Dettagli Viaggiatore</h1>
      <div>
        <p>
          <strong>Nome:</strong> {nome}
        </p>
        <p>
          <strong>Cognome:</strong> {cognome}
        </p>
        <p>
          <strong>Email:</strong> {mail}
        </p>
        <p>
          <strong>Data di nascita:</strong> {data_nascita}
        </p>
        <p>
          <strong>Codice fiscale:</strong> {codice_fiscale}
        </p>
        <p>
          <strong>ID Viaggio:</strong> {id_viaggio}
        </p>
      </div>
      <Link to={`/${id_viaggio}/viaggiatori`}>
        Torna alla lista dei viaggiatori
      </Link>
    </main>
  );
}
