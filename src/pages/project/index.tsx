import "./index.scss";
import React from "react";
import useFetch from "../../utils/hook/useFetch";
import { useParams } from "react-router-dom";
import ChildrenOrLoader from "../../components/ChildrenOrLoader";
import comaOrNot from "../../utils/function/comaOrNot";
import moment from "moment";
import momentLoc from "../../utils/moment";
import Button from "../../components/atom/button";

function Project() {
   const { id } = useParams();
   const URL_project = `http://localhost:3000/api/project/one/${id}`;
   const [data, isLoading, error] = useFetch(URL_project);

   momentLoc();

   return (
      <main className="main">
         <ChildrenOrLoader isLoading={isLoading} loaderClass="loader-projects">
            <>
               {error && <p>Une erreur est survenue: {error}</p>}
               {data && (
                  <div className="container">
                     <div className="imgSection">
                        <img src={data[0].imgURL} alt={`projet ${data[0].name}`} />
                     </div>
                     <div className="descriptionSection">
                        <h2>{data[0].name}</h2>
                        <div className="line"></div>
                        <div className="container-desc">
                           <p className="desc">{data[0].description}</p>
                           <p className="cont-link">
                              {data[0].linkToProject && (
                                 <>
                                    <Button classButton="button-colored">
                                       <a
                                          href={data[0].linkToProject}
                                          target="_blank"
                                          rel="noreferrer"
                                       >
                                          En ligne
                                       </a>
                                    </Button>
                                 </>
                              )}
                              {data[0].linkToGithub && (
                                 <>
                                    <Button classButton="button-colored">
                                       <a
                                          href={data[0].linkToGithub}
                                          target="_blank"
                                          rel="noreferrer"
                                       >
                                          Sur Github
                                       </a>
                                    </Button>
                                 </>
                              )}
                           </p>
                           <div className="cont-techAndDate">
                              <h3>
                                 Technos utilisées:{" "}
                                 <span>{comaOrNot(data[0].components)}</span>
                              </h3>

                              <p>Créé en {moment(data[0].creationDate).format("MMMM YYYY")}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               )}
            </>
         </ChildrenOrLoader>
      </main>
   );
}

export default Project;
