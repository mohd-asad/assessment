import react, { useState, useEffect } from "react";

const top = [
    { term: 'Item A', count: 10 },
    { term: 'Item B', count: 20 },
    { term: 'Item C', count: 30 }
  ];

export default function TopSearchesBanner() {
  return (
    <div className="bg-white p-3 rounded-md shadow-sm mb-4">
      <div className="flex items-center gap-3 overflow-x-auto">
        {top.map((t, i) => (
          <div
            key={i}
            className="px-3 py-1 border rounded-full whitespace-nowrap text-sm bg-gray-50"
          >
            {t.term} <span className="text-xs text-gray-500">({t.count})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
