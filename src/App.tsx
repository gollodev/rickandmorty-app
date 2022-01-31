// react imports
import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components imports
import Layout         from './Layout';
import HomePage       from './pages/HomePage';

const App: FC = (): JSX.Element => {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
