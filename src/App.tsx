// react imports
import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components imports
import Layout         from './Layout';
import HomePage       from './pages/HomePage';
import CharactersPage from './pages/CharactersPage';
import EpisodesPage   from './pages/EpisodesPage';
import LocationsPage  from './pages/LocationsPage';

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/characters" element={<CharactersPage/>}/>
            <Route path="/episodes" element={<EpisodesPage/>}/>
            <Route path="/locations" element={<LocationsPage/>}/>
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
