import React, { useEffect } from 'react';

export default function Modal({ imgSrc, alt, onClose }) {
  
  //모달 열릴 때 배경 스크롤 막아두기
  useEffect(() => {
    document.body.style.overflow = 'hidden'; //스크롤 불가
    return () => {
      document.body.style.overflow = ''; //스크롤 가능
    };
  }, []);

  return (
    //화면 전체 덮기(클릭하면 모달 닫히도록)
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />
      {/*모달 박스 설정되도록(배경이랑 구분이 안되어서 흰색 테두리 추가했습니다!)*/}
      <div className="relative bg-white rounded-lg p-4 z-10 max-w-lg w-full mx-4">
        { /*닫기 버튼(X표)*/}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl font-bold text-gray-700"
        >
          &times;
        </button>
       { /*모달 이미지(앨범 표지)*/}
        <img
          src={imgSrc}
          alt={alt}
          className="w-full h-auto max-h-[80vh] object-contain rounded"
        />
      </div>
    </div>
  );
}