// src/components/ImageCard.jsx
import React from 'react';

export default function ImageCard({ image, checked, onToggle }) {
  const thumb = image.urls?.small || image.urls?.thumb || '';
  const alt = image.alt_description || image.description || 'image';

  const handleCardClick = (e) => {
    // Don't toggle if clicking directly on the checkbox or label
    if (e.target.type === 'checkbox' || e.target.closest('label')) {
      return;
    }
    onToggle();
  };

  return (
    <div 
      onClick={handleCardClick}
      className="relative bg-gray-900 rounded overflow-hidden shadow border border-white/10 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer group"
    >
      <div className="overflow-hidden">
        <img 
          src={thumb} 
          alt={alt} 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
        />
      </div>
      <label 
        onClick={(e) => e.stopPropagation()}
        className="absolute top-2 left-2 bg-gray-900/80 text-gray-100 rounded p-1 flex items-center gap-2 group-hover:bg-gray-800/90 transition-colors duration-300"
      >
        <input type="checkbox" checked={checked} onChange={onToggle} />
      </label>

      <div className="p-2 text-xs text-gray-300 group-hover:text-white transition-colors duration-300">
        <div>{image.user?.name}</div>
      </div>
    </div>
  );
}
