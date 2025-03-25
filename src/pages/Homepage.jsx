import { useGlobalContext } from '../contexts/GlobalContext';
import ListaViaggi from '../../components/ListaViaggi';

export default function Homepage() {
  const { handleInputViaggio, viaggioFiltrato, handleSubmitViaggio, resetViaggioFiltrato } = useGlobalContext();

  return (
    <main>
      <h1 className="mb-4">Lista Viaggi</h1>
      <div className="row justify-content-center">
        <div>
          <form onSubmit={(e) => handleSubmitViaggio(e)} className="mb-4">
            <label htmlFor="ricercaViaggio" className="form-label">
              Cerca viaggio per ID
            </label>
            <div className="input-group">
              <input name="ricercaViaggio" type="text" placeholder="ID viaggio" value={viaggioFiltrato} onChange={(e) => handleInputViaggio(e)} className="form-control" />
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-search"></i> Cerca
              </button>
              <button type="button" onClick={() => resetViaggioFiltrato()} className="btn btn-secondary">
                <i className="bi bi-x"></i> Cancella
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-8">
          <ListaViaggi />
        </div>
      </div>
    </main>
  );
}
