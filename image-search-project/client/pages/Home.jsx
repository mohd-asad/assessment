// src/pages/Home.jsx
import React, { useState } from 'react';
import TopSearchesBanner from '../component/TopSearchesBanner';
import ImageGrid from '../component/ImageGrid';
import HistorySidebar from '../component/History';
import api from '../api/axios';


export default function Home() {
  const [term, setTerm] = useState('');
  const [images, setImages] = useState([]);
  const [resultCount, setResultCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e?.preventDefault();
    if (!term.trim()) return;
    setLoading(true);
    try {
      const res = await api.post('/api/search', { term: term.trim() });
      setImages(res.data.results || []);
      setResultCount(res.data.total || (res.data.results||[]).length);
    } catch (err) {
      console.error(err);
      alert('Search failed. Check console for details.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 py-4 mx-auto flex items-center justify-center">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <TopSearchesBanner />
          <div className="bg-gray-900/70 p-4 rounded-md shadow-sm mb-4 border border-white/10">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                value={term}
                onChange={e => setTerm(e.target.value)}
                placeholder="Search images (e.g., mountains, cats)"
                className="flex-1 p-2 rounded bg-gray-800 text-gray-100 placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button disabled={loading} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white rounded">
                {loading ? 'Searching...' : 'Search'}
              </button>
            </form>

            {resultCount !== 0 && (
              <p className="mt-3 text-sm text-gray-300">
                You searched for <strong>{term}</strong> — {resultCount} results.
              </p>
            )}
          </div>

          <ImageGrid images={images} term={term} />
        </div>

        <aside className="w-80">
          <HistorySidebar />
        </aside>
      </div>
    </div>
  );
}
