import { fireEvent, render, screen } from "@testing-library/react";
import Toggle from "../components/Toggle";

describe('Toggle Component - Jest', () => {
  test('초기 상태는 꺼짐', () => {
    render(<Toggle />);
    const textElement = screen.getByText('꺼짐');
    expect(textElement).toBeInTheDocument();
  });

  test('버튼 클릭 시 켜짐으로 변경된다.', () => {
    render(<Toggle />);
    const button = screen.getByRole('button', { name: 'ON' });
    fireEvent.click(button);
    const onText = screen.getByText('켜짐');
    expect(onText).toBeInTheDocument();
  });
});