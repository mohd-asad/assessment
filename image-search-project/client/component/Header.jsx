import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export default function Header() {
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
