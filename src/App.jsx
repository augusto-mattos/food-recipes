import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/_layout';
import Home from './pages/Home';
import Recipe from './pages/Recipe';

import './assets/styles.css';

function App() {
  return (
    <Router>
      <Layout> {/* Correção: Utilizar o Layout como um wrapper */}
        <Routes>
          <Route index element={<Home />} />
          <Route path='/recipe/:id' element={<Recipe />} />
        </Routes>
      </Layout> {/* Correção: Fechar o Layout após as rotas */}
    </Router>
  );
}

export default App
