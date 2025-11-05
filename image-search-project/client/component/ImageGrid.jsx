// src/components/ImageGrid.jsx
import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';

export default function ImageGrid({ images = [] }) {
  const [selected, setSelected] = useState({}); // store by image id

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

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <div>Selected: <span className="font-semibold">{selectedCount}</span> images</div>
        <div>
          {/* Example action on selected images */}
          <button
            disabled={selectedCount === 0}
            onClick={() => {
              // for demonstration: log selected items
              console.log('Selected images:', Object.values(selected));
              alert(`Selected ${selectedCount} images (see console).`);
            }}
            className="text-sm px-3 py-1 border rounded disabled:opacity-50"
          >
            Do something with selected
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map(img => (
          <ImageCard key={img.id} image={img} checked={!!selected[img.id]} onToggle={() => toggle(img.id, img)} />
        ))}
      </div>
    </div>
  );
}
