import React from "react";
import TopSearchesBanner from "../component/TopSearchesBanner";
import ImageGrid from "../component/ImageGrid";
import History from "../component/History";
const images = [
  {
    id: "1",
    alt_description: "Mountain Landscape",
    urls: {
      small:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
    },
    user: { name: "John Doe" },
  },
  {
    id: "2",
    alt_description: "City at night",
    urls: {
      small:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=400&q=80",
    },
    user: { name: "Jane Smith" },
  },
  {
    id: "3",
    alt_description: "Ocean sunset",
    urls: {
      small:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    },
    user: { name: "Alex Carter" },
  },
  {
    id: "4",
    alt_description: "Forest pathway",
    urls: {
      small:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
    },
    user: { name: "Emma Johnson" },
  },
  {
    id: "5",
    alt_description: "Desert dunes",
    urls: {
      small:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    },
    user: { name: "Michael Lee" },
  },
  {
    id: "6",
    alt_description: "Mountain Landscape",
    urls: {
      small:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
    },
    user: { name: "John Doe" },
  },
  {
    id: "7",
    alt_description: "City at night",
    urls: {
      small:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&w=400&q=80",
    },
    user: { name: "Jane Smith" },
  },
  {
    id: "8",
    alt_description: "Ocean sunset",
    urls: {
      small:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    },
    user: { name: "Alex Carter" },
  },
  {
    id: "9",
    alt_description: "Forest pathway",
    urls: {
      small:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80",
    },
    user: { name: "Emma Johnson" },
  },
];

export default function Home() {
  return (
    <div className="py-4 mx-auto flex items-center justify-center">
    <div className="flex items-start gap-4">
      <div className="flex-1">
        <TopSearchesBanner />
        <div className="bg-white p-4 rounded-md shadow-sm mb-4">
          <form  className="flex gap-2">
            <input
              placeholder="Search images (e.g., mountains, cats)"
              className="flex-1 p-2 border rounded"
            />
            <button  className="px-4 py-2 bg-blue-600 text-white rounded">
              {'Search'}
            </button>
          </form>
        </div>

        <ImageGrid images={images} />
      </div>

      <aside className="w-80">
        <History />
      </aside>
    </div>
  </div>
    
  );
}
