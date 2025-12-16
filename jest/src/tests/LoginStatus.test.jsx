import { render, screen } from "@testing-library/react";
import LoginStatus from "../components/LoginStatus";

describe('LoginStatus 컴포넌트', () => {
  test('로그인 하지 않았을 때 안내 문구와 로그인 버튼을 보여준다', () => {
    render(<LoginStatus isLoggedIn={false} />);

    expect(screen.getByText('로그인이 필요합니다')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '로그인' })).toBeInTheDocument();
  })
  
  test('로그인 상태일 때 환영 문구와 로그아웃 버튼을 보여준다', () => {
    render(<LoginStatus isLoggedIn={true} />);

    expect(screen.getByText('환영합니다')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '로그아웃' })).toBeInTheDocument();
  });
  
});
