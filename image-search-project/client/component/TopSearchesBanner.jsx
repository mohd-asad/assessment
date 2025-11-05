import react, { useState, useEffect } from "react";
import api from "../api/axios";

// const top = [
//     { term: 'Item A', count: 10 },
//     { term: 'Item B', count: 20 },
//     { term: 'Item C', count: 30 }
//   ];

export default function TopSearchesBanner() {
  const [top, setTop] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    let mounted = true;
    api
      .get("/api/top-searches")
      .then((res) => {
        if (mounted) setTop(res.data.top || []);
      })
      .catch(console.error)
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return <div className="px-4 py-2">Loading top searches...</div>;
  if (!top.length) return null;

  return (
    <div className="bg-white p-3 rounded-md shadow-sm mb-4">
      <div className="flex items-center gap-3 overflow-x-auto">
        <h2 className="text-lg font-semibold text-gray-800">Top Searches :</h2>
        {top.slice(0, 5).map((t, i) => (
          <div
            key={i}
            className="px-3 py-1 border rounded-full whitespace-nowrap text-sm bg-gray-50"
          >
            {t.term} <span className="text-xs text-gray-500">({t.count})</span>
          </div>
        ))}
      </div>
      {top.length > 5 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-400 hover:text-blue-300 hover:underline mt-3 block mx-auto"
        >
          {showAll ? "Show Less" : "View Full"}
        </button>
      )}
    </div>
  );
}
