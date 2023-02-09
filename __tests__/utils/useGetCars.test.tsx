import useGetCars from "../../utils/useGetCars";
import { act, renderHook } from "@testing-library/react";

describe("useGetCars", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("returns a Lamborghini and Ferrari", () => {
    const { result } = renderHook(() => useGetCars());
    act(() => {
      jest.runAllTimers();
    });
    expect(result.current).toEqual([
      false,
      [
        { id: "l", name: "Lamborghini" },
        { id: "f", name: "Ferrari" },
      ],
    ]);
  });
});
