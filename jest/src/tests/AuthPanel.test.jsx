import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AuthPanel from "../components/AuthPanel";

describe('AuthPannel 통합 시나리오', () => {
  test('로그인 -> 로딩 -> 성공 -> 로그아웃 전체 흐름', async () => {
    const user = userEvent.setup();
    render(<AuthPanel />);

    expect(screen.getByText('로그인이 필요합니다')).toBeInTheDocument();

    await user.click(
      screen.getByRole('button', { name: '로그인' })
    );

    expect(screen.getByText('로딩 중...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('환영합니다')).toBeInTheDocument();
    })

    await user.click(
      screen.getByRole('button', { name: '로그아웃' })
    )

    expect(screen.getByText('로그인이 필요합니다')).toBeInTheDocument();
  });
  
});
