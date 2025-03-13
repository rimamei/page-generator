import React from 'react';
import { Play, SkipBack, SkipForward, Shuffle, Volume2 } from 'lucide-react';

export default function Music() {
  const playlists = [
    {
      name: "Today's Hits",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      songs: 24
    },
    {
      name: "Relaxing Jazz",
      cover: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      songs: 18
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Music Control</h1>
      
      {/* Now Playing */}
      <div className="bg-gray-100 rounded-3xl p-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">Now Playing</h2>
        <div className="flex items-center gap-8">
          <div className="w-32 h-32 rounded-2xl overflow-hidden">
            <img 
              src={playlists[0].cover}
              alt="Album art"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Shape of You</h3>
            <p className="text-gray-500">Ed Sheeran</p>
            <div className="mt-4 flex items-center gap-6">
              <Shuffle className="w-5 h-5 text-gray-500" />
              <SkipBack className="w-5 h-5 text-gray-500" />
              <button className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center">
                <Play className="w-6 h-6" />
              </button>
              <SkipForward className="w-5 h-5 text-gray-500" />
              <Volume2 className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Playlists */}
      <h2 className="text-xl font-semibold mb-4">Your Playlists</h2>
      <div className="grid grid-cols-2 gap-6">
        {playlists.map((playlist) => (
          <div key={playlist.name} className="bg-white rounded-3xl p-6 shadow-md">
            <div className="w-full h-48 rounded-2xl overflow-hidden mb-4">
              <img 
                src={playlist.cover}
                alt={playlist.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold">{playlist.name}</h3>
            <p className="text-gray-500">{playlist.songs} songs</p>
          </div>
        ))}
      </div>
    </div>
  );
}