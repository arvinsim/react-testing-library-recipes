import React from "react";
import { render, screen } from "@testing-library/react";
import ConditionalMock from "../../components/ConditionalMock";
import getConfigFlag from "../../utils/getConfigFlag";

jest.mock("../../utils/getConfigFlag");

describe("ConditionalMock", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test.each([
    {
      userName: "John",
    },
    {
      userName: "Jane",
    },
  ])(
    `show page if config is set to true and $userName is the user`,
    ({ userName }) => {
      (getConfigFlag as jest.Mock).mockImplementation(
        (name: string, defaultValue: string) => {
          const { getConfigFlag: actualImplementation } = jest.requireActual(
            "../../utils/GetConfigFlag"
          );

          if (name === "shouldShowPage") {
            return true;
          }

          if (name === "userName") {
            return userName;
          }

          return actualImplementation(name, defaultValue);
        }
      );

      render(<ConditionalMock />);
      const re = new RegExp(`page is shown by ${userName}`, "i");
      expect(screen.getByText(re)).toBeInTheDocument();
    }
  );

  it(`don't show page if config is set to false`, () => {
    (getConfigFlag as jest.Mock).mockImplementation(
      (name: string, defaultValue: string) => {
        const { getConfigFlag: actualImplementation } = jest.requireActual(
          "../../utils/getConfigFlag"
        );

        if (name === "shouldShowPage") {
          return false;
        }

        if (name === "userName") {
          return "John";
        }

        return actualImplementation(name, defaultValue);
      }
    );

    render(<ConditionalMock />);
    expect(screen.queryByText(/page is shown/i)).toBeNull();
  });
});
