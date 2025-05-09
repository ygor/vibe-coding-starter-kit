import { render, screen, fireEvent } from "@testing-library/react";
import CreateTodo from "./CreateTodo";

test("renders CreateTodo and submits form", () => {
  render(<CreateTodo />);
  const input = screen.getByLabelText(/title/i);
  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(screen.getByText(/submit/i));
  expect(screen.getByText(/New Task/i)).toBeInTheDocument();
});