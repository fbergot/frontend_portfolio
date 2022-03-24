import { useState, useEffect, useRef } from "react";

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

type FetchReturn = [Projects, boolean, boolean];

const useFetch = (url: string, options?: RequestInit): FetchReturn => {
   const [data, setData] = useState(null);
   const [error, setError] = useState(false);
   const [isLoading, setIsLoading] = useState(true);

   const abortController = useRef(new AbortController());

   useEffect(() => {
      const AbortContolCurr = abortController.current;
      (async function fetchData() {
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
               console.error(`This is a HTTP error: status code: ${response.status}`);
               setError(true);
            }
         } catch (err) {
            if (!(err instanceof DOMException && err.code === err.ABORT_ERR)) {
               console.error(err);
               setError(true);
            }
         } finally {
            setData(projects);
            setIsLoading(false);
         }
      })();
      // cleanup: abort fetch
      return () => AbortContolCurr.abort();
   }, [url, options]);
   return [data, isLoading, error];
};

export default useFetch;
