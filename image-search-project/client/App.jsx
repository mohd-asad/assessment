import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./component/Login";
import { AuthProvider, useAuth } from "./contexts/authContext";
import ProtectedRoute from "./component/ProtectedRoute";
import NotFound from "./pages/NotFound";

function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto p-3 flex items-center justify-between">
        <Link to="/" className="font-semibold">
          ImageSearch
        </Link>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="text-sm">Hi, {user.name}</div>
              <button
                onClick={logout}
                className="text-sm px-3 py-1 border rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="text-sm px-3 py-1 border rounded">
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
