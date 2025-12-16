import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputForm from "../components/InputForm";

describe('InputFrom 컴포넌트', () => {
  test('입력값이 없으면 경고 메세지를 보여준다', async () => {
    render(<InputForm />);

    const button = screen.getByRole('button', { name: '확인' });
    await userEvent.click(button);

    expect(screen.getByText('값을 입력하세요')).toBeInTheDocument();
  });
});
