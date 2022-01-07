import { useState, useEffect } from "react";

const CONTEXT_KEY = "4105139f89ced1b73";

const useGoogleSearch = (textString) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const URL = `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_APIKEY}&cx=${CONTEXT_KEY}&q=${textString}`;
    const fetchData = () => {
      fetch(URL)
        .then((response) => response.json())
        .then((result) => {
          if (isMounted) setData(result);
        });
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [textString]);

  return { data };
};

export default useGoogleSearch;
