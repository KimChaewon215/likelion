import albumData from '../data/album.json';
import {SongCard} from '../components/Songcard';

export const Playlist = () => {
  return (
    <main className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {albumData.map((album, index) => (
        <section 
          key={index}
          className="max-w-[250px] bg-gray-800 p-6 rounded-lg shadow">
        <img
          src={album.albumImage}
          alt={`${album.title} 앨범 커버`}
          className="max-w-[200px] w-full rounded mb-4"
        />
        <h2 className="text-2xl font-semibold">{album.title}</h2>
        <hr className="my-4" />
        <p className="text-gray-200">🎤 가수: {album.artist}</p>
        <p className="text-gray-200">📝 작사가: {album.lyricist}</p>
        <p className="text-gray-200">🎼 작곡가: {album.composer}</p>
        <p className="text-gray-400 text-sm mt-2">📅 발매일: {album.releaseDate}</p>
      </section>
      ))}
</main>
  );
};
