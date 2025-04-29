export const SongCard = ({ albumImage, releaseDate, artist, title, lyricist, composer }) => {
    return (
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition-all duration-300">
        <img src={albumImage} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-300 mb-1">🎤 Artist: {artist}</p>
          <p className="text-gray-300 mb-1">🗓️ Release: {releaseDate}</p>
          <p className="text-gray-300 mb-1">✍️ Lyricist: {lyricist}</p>
          <p className="text-gray-300">🎼 Composer: {composer}</p>
        </div>
      </div>
    );
  };
  