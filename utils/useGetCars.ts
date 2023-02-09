import { useEffect, useState } from "react";

type Cars = {
  id: string;
  name: string;
};

function useGetCars(): [boolean, Array<Cars>] {
  const [cars, setCars] = useState<Array<Cars>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const myTimeout = setTimeout(() => {
      setCars([
        { id: "l", name: "Lamborghini" },
        { id: "f", name: "Ferrari" },
      ]);
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(myTimeout);
    };
  }, []);

  return [loading, cars];
}

export default useGetCars;
