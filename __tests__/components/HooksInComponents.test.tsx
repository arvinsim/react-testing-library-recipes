import React from "react";
import { render, screen } from "@testing-library/react";
import HooksInComponents from "../../components/HooksInComponents";
import useGetCars from "../../utils/useGetCars";

jest.mock("../../utils/useGetCars");

describe("HooksInComponents", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("shows loading page while loading", () => {
    (useGetCars as jest.Mock).mockImplementation(() => [true, []]);

    render(<HooksInComponents />);
    expect(screen.getByText(/page is not yet loaded/i)).toBeInTheDocument();
  });

  it("shows cars data after loading", () => {
    (useGetCars as jest.Mock).mockImplementation(() => [
      false,
      [
        { id: "m", name: "Maserati" },
        { id: "b", name: "Bughatti" },
      ],
    ]);

    render(<HooksInComponents />);
    expect(screen.getByText(/maserati/i)).toBeInTheDocument();
    expect(screen.getByText(/bughatti/i)).toBeInTheDocument();
  });
});
