import { useState, useEffect } from 'react';
import { requestData } from './requests';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await requestData(url);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [url]);
  return data;
};
