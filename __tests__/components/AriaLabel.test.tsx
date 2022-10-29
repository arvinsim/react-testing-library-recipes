import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AriaLabel from "../../components/AriaLabel";

describe("AriaLabel", () => {
  it("render names", () => {
    const persons = [
      { id: 1, name: "John", handleClick: jest.fn() },
      { id: 2, name: "Jane", handleClick: jest.fn() },
    ];
    render(<AriaLabel persons={persons} />);
    expect(screen.getByLabelText(/John/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Jane/i)).toBeInTheDocument();
  });

  // This tests demonstrates using aria label to retrieve the button
  it("does something on click", async () => {
    const user = userEvent.setup();

    const persons = [
      { id: 1, name: "John", handleClick: jest.fn() },
      { id: 2, name: "Jane", handleClick: jest.fn() },
    ];
    render(<AriaLabel persons={persons} />);

    const button = screen.getByLabelText(/Connect Jane/i);
    expect(button).toBeInTheDocument();
    await user.click(button);
    expect(persons[1].handleClick).toHaveBeenCalled();
  });
});
