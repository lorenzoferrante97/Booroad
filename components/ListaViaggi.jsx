import { use } from 'react';
import { useGlobalContext } from '../src/contexts/GlobalContext';
import { Link } from 'react-router-dom';

export default function ListaViaggi() {
  const { oggettoViaggioFiltrato } = useGlobalContext();

  return (
    <ul>
      {oggettoViaggioFiltrato?.map((v) => {
        return (
          <li key={v.id}>
            <Link to={`/${v.id}/viaggio`}>
              {v.nome} ({v.data})
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
