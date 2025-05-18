// src/App.jsx
import Navbar from './components/Navbar';
import Playlist from './pages/Playlist';      // 메인 콘텐츠
import Top100   from './pages/Top100';
import MyPage   from './pages/MyPage';
import Login    from './pages/Login';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Navbar />

      {/* 각 페이지 라우팅 */}
      <div className="pt-20 bg black min-h screen">  {/* nav 높이만큼 패딩 주기 */}
        <Routes>
          <Route path="/" element={<Playlist />} />
          <Route path="/top100" element={<Top100 />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}
