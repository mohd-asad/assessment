// src/components/ImageCard.jsx
import React from 'react';

export default function ImageCard({ image, checked, onToggle }) {
  const thumb = image.urls?.small || image.urls?.thumb || '';
  const alt = image.alt_description || image.description || 'image';

  return (
    <div className="relative bg-white rounded overflow-hidden shadow">
      <img src={thumb} alt={alt} className="w-full h-48 object-cover" />
      <label className="absolute top-2 left-2 bg-white/80 rounded p-1 flex items-center gap-2">
        <input type="checkbox" checked={checked} onChange={onToggle} />
      </label>

      <div className="p-2 text-xs text-gray-600">
        <div>{image.user?.name}</div>
      </div>
    </div>
  );
}
