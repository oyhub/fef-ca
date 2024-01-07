import { useState, useEffect } from 'react';

export type Review = {
  id: string;
  username: string;
  rating: number;
  description: string;
};

export type Data = {
  id?: string,
  title: string,
  description?: string,
  price: number,
  discountedPrice?: number,
  imageUrl?: string,
  rating?: number,
  tags?: string[],
  reviews?: Review[]
}

function GetData(url: string, maxLength: null | number = null) {
  const [data, setData] = useState<Data | Data[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        let result: Data[] = await response.json();

        if (maxLength !== null && Array.isArray(result)) {
          result = result.slice(0, maxLength);
        }

        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error('Unknown error occurred'));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, maxLength]);

  return { data, loading, error };
}

export default GetData;
