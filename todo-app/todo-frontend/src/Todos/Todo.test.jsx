/* eslint-disable no-undef */
import Todo from "./Todo";
import { render, screen } from "@testing-library/react";

test("Todo Renders Content", () => {
  const todo = {
    text: "Test Text by Vitest",
    done: false,
  };

  render(<Todo todo={todo} />);

  const element = screen.getByText("Test Text by Vitest");
  expect(element).toBeDefined();
});
