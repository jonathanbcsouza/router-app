import { useEffect, useState } from 'react';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export function useData(url: string) {
  const [data, setData] = useState<Product[]>();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
}
