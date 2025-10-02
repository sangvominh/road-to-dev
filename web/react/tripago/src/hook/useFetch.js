import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url, { signal: controller.signal });
        const json = await response.json();
        setIsPending(false);
        setData(json);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("cancel fetching");
        } else {
          setIsPending(false);
          setError("could'n fetching data");
          // console.log(err);
        }
      }
    };
    fetchData();
    
    // clean up function
    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isPending, error };
}
