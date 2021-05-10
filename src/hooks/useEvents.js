import { useState, useEffect} from "react"
function useEvents(url) {
   const [events, setevents] =useState();
   const [isPending, setIsPending] =useState(true);
   const [error, setError] =useState();

   useEffect(() => {
      const fetchCountry = async () => {
          const data = await fetch(url)
          .then((res) => res.json())
          .catch(err => setError(err));
          setevents(data);
          setIsPending(false);
      };
      fetchCountry();
   }, [url]);
   return {
       events,
       isPending,
       error,
   };
}
export default useEvents;