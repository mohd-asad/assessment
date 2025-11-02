// src/components/HistorySidebar.jsx
import React from 'react';

const history = [
    {
      term: "mountains",
      timestamp: Date.now() - 1000 * 60 * 5, 
    },
    {
      term: "cats",
      timestamp: Date.now() - 1000 * 60 * 30, 
    },
    {
      term: "space",
      timestamp: Date.now() - 1000 * 60 * 60 * 2,
    },
    {
      term: "sunsets",
      timestamp: Date.now() - 1000 * 60 * 60 * 6, 
    },
    {
      term: "forests",
      timestamp: Date.now() - 1000 * 60 * 60 * 24, 
    },
    {
      term: "architecture",
      timestamp: Date.now() - 1000 * 60 * 60 * 48, 
    },
    {
      term: "underwater",
      timestamp: Date.now() - 1000 * 60 * 60 * 72, 
    },
  ];

export default function HistorySidebar() {

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
                <div className="text-xs text-gray-400">{new Date(h.timestamp).toLocaleString()}</div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
