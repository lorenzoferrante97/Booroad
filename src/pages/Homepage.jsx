import { useGlobalContext } from "../contexts/GlobalContext";
import ListaViaggi from "../../components/ListaViaggi";

export default function Homepage() {

  return (
    <main>
      <h1>Lista Viaggi</h1>
      <ListaViaggi />
    </main>
  );
}
