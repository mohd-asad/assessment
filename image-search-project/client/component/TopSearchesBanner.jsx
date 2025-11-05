import react, { useState, useEffect } from "react";
import api from "../api/axios";

// const top = [
//     { term: 'Item A', count: 10 },
//     { term: 'Item B', count: 20 },
//     { term: 'Item C', count: 30 }
//   ];

export default function TopSearchesBanner() {
  const [top, setTop] = useState([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="bg-gray-900/70 p-3 rounded-lg shadow-lg border border-white/10 mb-4">
        <div className="flex items-center gap-2 text-gray-300">
          <div className="w-4 h-4 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <span>Loading top searches...</span>
        </div>
      </div>
    );
  }
  
  if (!top.length) return null;

  return (
    <div className="bg-gray-900/70 p-3 rounded-lg shadow-lg border border-white/10 mb-4">
      <div className="flex items-center gap-3 overflow-x-auto">
        <h2 className="text-lg font-semibold text-white whitespace-nowrap">Top Searches:</h2>
        {top.slice(0, 5).map((t, i) => (
          <div
            key={i}
            className="px-3 py-1 border border-white/20 rounded-full whitespace-nowrap text-sm bg-gray-800/50 text-gray-200 hover:bg-indigo-600/30 hover:border-indigo-500/50 hover:text-white transition-all duration-200 cursor-pointer"
          >
            {t.term} <span className="text-xs text-gray-400">({t.count})</span>
          </div>
        ))}
      </div>
    </div>
  );
}
