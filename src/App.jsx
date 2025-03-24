import { GlobalProvider } from './contexts/GlobalContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // router
import DefaultLayout from './layouts/DefaultLayout'; // layouts
import Homepage from './pages/Homepage'; // pages
import Viaggio from './pages/Viaggio';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Homepage}></Route>
            <Route path="/:id/viaggiatori" Component={Viaggio}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;

// start code
