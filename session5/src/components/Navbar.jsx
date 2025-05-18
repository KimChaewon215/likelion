import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ─────────────── 데스크톱 ─────────────── */}
      <nav className="hidden lg:flex fixed inset-x-0 top-0 h-16 items-center justify-between bg-black px-10 text-white shadow z-50">
        <div className="flex items-center space-x-10">
          <Link to="/" className="text-2xl font-semibold">Playlist 🎧</Link>
          <Link to="/top100">Top 100</Link>
          <Link to="/mypage">My Page</Link>
        </div>
        <Link to="/login">Login</Link>
      </nav>

      {/* ─────────────── 모바일 헤더 ─────────────── */}
      <nav className="flex lg:hidden fixed inset-x-0 top-0 h-16 items-center justify-between bg-black px-6 text-white shadow z-50">
        <Link to="/" className="text-2xl font-semibold">Playlist 🎧</Link>

        <button onClick={() => setIsOpen(!isOpen)} aria-label="메뉴 열기">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </nav>

      {/* ─────────────── 모바일 사이드바 ─────────────── */}
      <aside className={`fixed lg:hidden top-0 right-0 h-full w-64 transform bg-black text-white transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}>
        <div className="flex flex-col items-center pt-24 space-y-8">
          <Link to="/top100" onClick={() => setIsOpen(false)}>Top 100</Link>
          <Link to="/mypage" onClick={() => setIsOpen(false)}>My Page</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      </aside>
    </>
  );
}
