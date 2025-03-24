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
}
