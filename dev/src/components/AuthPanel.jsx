import { useState } from "react"
import { loginApi } from "../api/auth";

const AuthPannel = () => {

  const [status, setStatus] = useState('loggedOut');

  const handleLogin = async () => {
    setStatus('loading');
    const res = await loginApi();
    if (res.success) setStatus('loggedIn');
  };

  const handleLogout = () => {
    setStatus('loggedOut');
  }

  return (
    <div>
      {status === 'loggedOut' && (
        <>
          <p>로그인이 필요합니다</p>
          <button onClick={handleLogin}>로그인</button>
        </>
      )}

      {status === 'loading' && (
        <>
          <p>로딩 중...</p>
        </>
      )}

      {status === 'loggedIn' && (
        <>
          <p>환영합니다</p>
          <button onClick={handleLogout}>로그아웃</button>
        </>
      )}
    </div>
  )
}

export default AuthPannel
