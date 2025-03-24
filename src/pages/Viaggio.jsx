import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../contexts/GlobalContext';

export default function Viaggio() {
  const { id } = useParams();

  const { getViaggiatori } = useGlobalContext();

  const viaggiatoriViaggio = getViaggiatori(id);

  return (
    <>
      <main>
        <h1>Viaggio 1</h1>
        <div>
          <ul>Lista viaggiatori</ul>
        </div>
      </main>
    </>
  );
}
