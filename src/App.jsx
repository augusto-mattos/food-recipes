import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/_layout";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Login from "./pages/Login";
import { AuthGoogleProvider } from "../src/contexts/authGoogle";

import "./assets/styles.css";

function App() {
  return (
    <AuthGoogleProvider>
      <Router>
        <Routes>
          <Route
            index
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/recipe/:id"
            element={
              <Layout>
                <Recipe />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </Router>
    </AuthGoogleProvider>
  );
}

export default App;
