import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import login from '../apis/auth';
import useAuthStore from '../apis/auth';

const KakaoRedirectPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setTokens } = useAuthStore();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');

    if (!code) {
      alert('인가 코드 없음');
      navigate('/login');
      return;
    }

    const kakaoLogin = async () => {
      try {
        const { accessToken, refreshToken } = await login(code);
        setTokens(accessToken, refreshToken);
        navigate('/');
      } catch (err) {
        alert('로그인 실패');
        navigate('/login');
      }
    };

    // 1) kakaoLogin 함수를 제대로 호출하고  
    kakaoLogin();  
    // 2) code 값을 콘솔에 찍을 땐 useEffect 내부에서
    console.log('카카오 인가 코드:', code);
  }, [location.search, navigate, setTokens]);

  return <>로딩중...</>;
};

export default KakaoRedirectPage;