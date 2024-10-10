import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import ArticleForm from "./components/Articles/ArticleForm";
import ArticleUpdateForm from "./components/Articles/ArticleUpdateForm";
const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};
const AppRoutes = ({ isAuthenticated, setIsAuthenticated }) => (
  <Router>
    <Routes>
    <Route
        path="/"
        element={<Login setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route
        path="/login"
        element={<Login setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route
        path="/home"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/create"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <ArticleForm />
          </ProtectedRoute>
        }
      />

      <Route path="/update/:articleId" element={<ArticleUpdateForm />} />
    </Routes>
  </Router>
);
export default AppRoutes;
