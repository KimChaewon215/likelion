import React, { useState } from 'react';
import albumData from '../data/album.json';
import { SongCard } from '../components/layout/Songcard';
import Modal from '../hooks/Modal';

export function Playlist() {
  //모달 구현하면서 추가(표시할 이미지를 URL로 저장)->null이면 모달 닫히도록 구현
  const [modalImage, setModalImage] = useState(null);

  return (
    <>
      <main className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {albumData.map((song, idx) => (
          <SongCard
            key={idx}
            albumImage={song.albumImage}
            title={song.title}
            artist={song.artist}
            lyricist={song.lyricist}
            composer={song.composer}
            releaseDate={song.releaseDate}
            onClick={() => setModalImage(song.albumImage)}
            //onClick 이벤트 발생 시 해당 앨범 이미지로 모달 띄워주기
          />
        ))}
      </main>

      {/*modalImage가 1일 때만 모달 컴포넌트를 화면에 렌더링 */}
      {modalImage && (
        <Modal
          imgSrc={modalImage} //이미지
          alt="Album cover" 
          onClose={() => setModalImage(null)} //모달 닫기
        />
      )}
    </>
  );
}
