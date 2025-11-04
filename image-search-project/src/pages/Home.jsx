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
    <div className="py-4 mx-auto flex items-center justify-center">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <TopSearchesBanner />
          <div className="bg-white p-4 rounded-md shadow-sm mb-4">
            <form onSubmit={handleSearch} className="flex gap-2">
              <input
                value={term}
                onChange={e => setTerm(e.target.value)}
                placeholder="Search images (e.g., mountains, cats)"
                className="flex-1 p-2 border rounded"
              />
              <button disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">
                {loading ? 'Searching...' : 'Search'}
              </button>
            </form>

            {resultCount !== 0 && (
              <p className="mt-3 text-sm text-gray-600">
                You searched for <strong>{term}</strong> — {resultCount} results.
              </p>
            )}
          </div>

          <ImageGrid images={images} />
        </div>

        <aside className="w-80">
          <HistorySidebar />
        </aside>
      </div>
    </div>
  );
}
