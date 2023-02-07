import useGetCars from "../../utils/useGetCars";
import { renderHook } from "@testing-library/react";

describe("useGetCars", () => {
  it("returns a Lamborghini and Ferrari", () => {
    const { result } = renderHook(() => useGetCars());
    expect(result.current).toEqual([
      false,
      [
        { id: "l", name: "Lamborghini" },
        { id: "f", name: "Ferrari" },
      ],
    ]);
  });
});
