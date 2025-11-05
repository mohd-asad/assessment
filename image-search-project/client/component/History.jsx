import React, { useEffect, useState } from "react";
import api from "../api/axios";

export default function HistorySidebar() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    api
      .get("/api/history")
      .then((res) => {
        if (mounted) setHistory(res.data.history || []);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (loading)
    return (
      <div className="p-4 bg-gray-900/70 rounded-lg shadow-lg border border-white/10 text-gray-300">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <span>Loading history...</span>
        </div>
      </div>
    );

  return (
    <div className="bg-gray-900/70 p-4 rounded-lg shadow-lg border border-white/10">
      <h3 className="font-semibold mb-4 text-white text-lg">Your search history</h3>
      {history.length === 0 ? (
        <p className="text-sm text-gray-400 italic">No searches yet.</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {history.map((h, idx) => (
            <li 
              key={idx} 
              className="border-b border-white/10 pb-2 last:border-b-0 hover:bg-gray-800/50 rounded px-2 py-1 transition-colors duration-200 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div className="text-gray-200 group-hover:text-white font-medium transition-colors duration-200">
                  {h.term}
                </div>
                <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-200">
                  {new Date(h.timestamp).toLocaleString()}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
