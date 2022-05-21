import { useState, useEffect, useRef, useCallback } from "react";

interface ProjectData {
   _id: string;
   name: string;
   imgURL: string;
   description: string;
   components: string[];
   linkToProject?: string;
   linkToGithub?: string;
   isMini: boolean;
   creationDate: Date;
}

type Projects = ProjectData[];

type FetchReturn = [Projects, boolean, string];

const useFetch = (url: string, options?: RequestInit): FetchReturn => {
   const [data, setData] = useState(null);
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(true);

   const abortController = useRef(new AbortController());

   const fetchData = useCallback(
      async function () {
         try {
            const response = await fetch(url, {
               ...options,
               signal: abortController.current.signal,
            });

            var projects: ProjectData;

            if (response.ok) {
               projects = await response.json();
               setData(projects);
            } else {
               setError(`HTTP error: ${response.status}`);
            }
         } catch (err) {
            if (!(err instanceof DOMException && err.code === err.ABORT_ERR)) {
               setError(err.message);
            } else {
               console.warn(err);
            }
         } finally {
            setData(projects);
            setIsLoading(false);
         }
      },
      [options, url]
   );

   useEffect(() => {
      const AbortContolCurr = abortController.current;
      fetchData();
      // cleanup: abort fetch
      return () => AbortContolCurr.abort();
   }, [fetchData, url, options]);

   return [data, isLoading, error];
};

export default useFetch;
