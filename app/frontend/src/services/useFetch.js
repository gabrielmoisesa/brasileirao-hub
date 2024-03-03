import { useState, useEffect } from 'react';
import { requestData } from './requests';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const data = await requestData(url);
        if (data.length === 0) {
          throw new Error('No Data');
        }
        setIsPending(false);
        setData(data);
      } catch (error) {
        console.log(error);
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, isPending };
};
