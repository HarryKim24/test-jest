const LoginStatus = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>환영합니다</p>
          <button>로그아웃</button>
        </>
      ): (
        <>
          <p>로그인이 필요합니다</p>
          <button>로그인</button>
        </>
      )}
    </div>
  )
}

export default LoginStatus
