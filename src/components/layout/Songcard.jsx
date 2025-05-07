import React from 'react';
//2주차 과제에서 피드백 주신대로 수정했습니다!
export function SongCard({ albumImage, releaseDate, artist, title, lyricist, composer, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-300"
    >
      <img src={albumImage} alt={title} className="w-full h-auto object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300 mb-1">🎤 가수: {artist}</p>
        <p className="text-gray-300 mb-1">✍️ 작사가: {lyricist}</p>
        <p className="text-gray-300">🎼 작곡가: {composer}</p>
        <p className="text-gray-300 mb-1">🗓️ 발매일: {releaseDate}</p>

      </div>
    </div>
  );
}
