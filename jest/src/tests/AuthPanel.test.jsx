import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AuthPanel from "../components/AuthPanel";
import * as authApi from "../api/auth";

describe('AuthPannel API 통합 테스트', () => {
  test('로그인 성공 시 전체 흐름', async () => {
    jest.spyOn(authApi, 'loginApi').mockImplementation(() => {
      return new Promise((reslove) => {
        setTimeout(() => {
          reslove({ success: true });
        }, 200);
      });
    });

    const user = userEvent.setup();
    render(<AuthPanel />);

    expect(
      screen.getByText("로그인이 필요합니다")
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole('button', { name: '로그인' })
    );

    expect(
      screen.getByText('로딩 중...')
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByText('환영합니다')
      ).toBeInTheDocument();
    })
  });
});
