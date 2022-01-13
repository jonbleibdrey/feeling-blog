import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // abort controller
    const abortCont = new AbortController()
    // runs in every rerender, even deletes
    fetch(url, {signal: abortCont.signal})
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data");
        }
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if(err.name === "AbortError"){
          console.log('fetch aborted')
        } else{
          setError(err.message);
          setIsPending(false);
        }
      });
    console.log("useEffect ran");

    // to abort and void the quick change error, not really needed unless you get error
    return () => abortCont.abort()

  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
