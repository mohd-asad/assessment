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
      <div className="p-4 bg-white rounded shadow">Loading history...</div>
    );

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-2">Your search history</h3>
      {history.length === 0 ? (
        <p className="text-sm text-gray-500">No searches yet.</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {history.map((h, idx) => (
            <li key={idx} className="border-b pb-2">
              <div className="flex items-center justify-between">
                <div>{h.term}</div>
                <div className="text-xs text-gray-400">
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
