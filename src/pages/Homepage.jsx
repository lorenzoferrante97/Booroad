import { useGlobalContext } from "../contexts/GlobalContext";
import ListaViaggi from "../../components/ListaViaggi";

export default function Homepage() {
  return (
    <main>
      <h1 className="mb-4">Lista Viaggi</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <ListaViaggi />
        </div>
      </div>
    </main>
  );
}
