import "./index.scss";
import React from "react";
import useFetch from "../../utils/hook/useFetch";
import { useParams } from "react-router-dom";
import ChildrenOrLoader from "../../components/ChildrenOrLoader";

function Project() {
   const { id } = useParams();
   const URL_project = `http://localhost:3000/api/project/one/${id}`;
   const [data, isLoading, error] = useFetch(URL_project);

   if (data) console.log(data);
   return (
      <main className="main">
         <ChildrenOrLoader isLoading={isLoading} loaderClass="loader-projects">
            {data && (
               <>
                  <div className="container">
                     <div className="imgSection">
                        <img src={data[0].imgURL} alt={`projet ${data[0].name}`} />
                     </div>
                     <div className="descriptionSection">
                        <h2>{data[0].name}</h2>
                        <div className="line"></div>
                     </div>
                  </div>
               </>
            )}
         </ChildrenOrLoader>
      </main>
   );
}

export default Project;
