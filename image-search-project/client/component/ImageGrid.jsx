// src/components/ImageGrid.jsx
import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';

export default function ImageGrid({ images = [], term = '' }) {
  const [selected, setSelected] = useState({}); // store by image id

  // Fallback images (shown only when no search term)
  const fallbackImages = [
    { id: 'ph-1', urls: { small: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop' }, user: { name: 'Unsplash' }, alt_description: 'Mountain lake' },
    { id: 'ph-2', urls: { small: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop' }, user: { name: 'Unsplash' }, alt_description: 'Work desk' },
    { id: 'ph-3', urls: { small: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=800&auto=format&fit=crop' }, user: { name: 'Unsplash' }, alt_description: 'Forest path' },
    { id: 'ph-4', urls: { small: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop' }, user: { name: 'Unsplash' }, alt_description: 'Code screen' },
    { id: 'ph-5', urls: { small: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop' }, user: { name: 'Unsplash' }, alt_description: 'Beach sunset' },
    { id: 'ph-6', urls: { small: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop' }, user: { name: 'Unsplash' }, alt_description: 'Desert dunes' },
    { id: 'ph-7', urls: { small: 'https://images.unsplash.com/photo-1520975922424-c7c56937a4f3?q=80&w=800&auto=format&fit=crop' }, user: { name: 'Unsplash' }, alt_description: 'City skyline' },
    { id: 'ph-8', urls: { small: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&w=800&auto=format&fit=crop' }, user: { name: 'Unsplash' }, alt_description: 'Coffee cup' },
  ];

  useEffect(() => {
    
    setSelected(prev => {
      const keep = {};
      for (let img of images) if (prev[img.id]) keep[img.id] = true;
      return keep;
    });
  }, [images]);

  const toggle = (id, img) => {
    setSelected(prev => {
      const next = { ...prev };
      if (next[id]) delete next[id];
      else next[id] = img;
      return next;
    });
  };

  const selectedCount = Object.keys(selected).length;

  const imagesToShow = images.length > 0
    ? images
    : (term.trim() ? [] : fallbackImages);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-gray-300">
        <div>Selected: <span className="font-semibold">{selectedCount}</span> images</div>
        <div>
          <button
            disabled={selectedCount === 0}
            onClick={() => {
              console.log('Selected images:', Object.values(selected));
              alert(`Selected ${selectedCount} images (see console).`);
            }}
            className="text-sm px-3 py-1 border border-white/10 rounded disabled:opacity-50 bg-gray-800 text-gray-200"
          >
            Do something with selected
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {imagesToShow.map(img => (
          <ImageCard key={img.id} image={img} checked={!!selected[img.id]} onToggle={() => toggle(img.id, img)} />
        ))}
      </div>
    </div>
  );
}
