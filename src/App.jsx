import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/_layout';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Login from './pages/Login';

import './assets/styles.css';

function App() {
  return (
    <Router>
      <Layout> 
        <Routes>
          <Route index element={<Home />} />
          <Route path='/recipe/:id' element={<Recipe />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Layout> 
    </Router>
  );
}

export default App;
