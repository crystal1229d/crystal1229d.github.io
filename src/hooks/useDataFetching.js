import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const useDataFetching = (dataKey) => {
  const [data, setData] = useState(null);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await import(`../data/db.${currentLanguage}.json`);
        setData(data[dataKey]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentLanguage, dataKey]);

  return data;
};

export default useDataFetching;