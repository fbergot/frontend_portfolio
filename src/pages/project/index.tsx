import "./index.scss";
import React from "react";
import useFetch from "../../utils/hook/useFetch";
import { useParams } from "react-router-dom";
import ChildrenOrLoader from "../../components/ChildrenOrLoader";
import addComaIfNotLast from "../../utils/function/addComaIfNotLast";
import Button from "../../components/atom/button";
import { dateFormated } from "../../utils/function/utils";
import { GrProjects } from "react-icons/gr";
import { BsCalendarDate } from "react-icons/bs";
function Project() {
   const { id } = useParams();
   const URL_project = `http://localhost:3000/api/project/one/${id}`;
   const [data, isLoading, error] = useFetch(URL_project);

   const techosFormated = data && addComaIfNotLast(data[0].components);
   const dateFomated = data && dateFormated(data[0].creationDate, "MMMM YYYY");

   return (
      <main className="main">
         <ChildrenOrLoader isLoading={isLoading} loaderClass="loader-projects">
            <>
               {error && <p>Une erreur est survenue: {error}</p>}
               {data && (
                  <>
                     <div className="container">
                        <span className="cont-p-ic">
                           <GrProjects className="project-icon" />
                           <div>
                              <h1>{data[0].name}</h1>
                           </div>
                        </span>
                        <div className="line"></div>

                        <section className="cont-imgSection-descSection">
                           <div className="imgSection">
                              <img src={data[0].imgURL} alt={`projet ${data[0].name}`} />
                              {/* <img src={data[0].otherImg[0]} alt={`projet ${data[0].name}`} /> */}
                           </div>

                           <div className="descriptionSection">
                              <div className="container-desc">
                                 <p className="desc">{data[0].description}</p>
                                 <h3>Technos et skills utilisés:</h3>
                                 <p>{techosFormated}</p>
                              </div>
                           </div>
                        </section>
                        <div className="cont-link">
                           {data[0].linkToProject && (
                              <Button classButton="button-colored">
                                 <a
                                    href={data[0].linkToProject}
                                    target="_blank"
                                    rel="noreferrer"
                                 >
                                    En ligne
                                 </a>
                              </Button>
                           )}

                           <div className="cont-techAndDate">
                              <p>
                                 <BsCalendarDate />
                              </p>
                              <p>Créé en {dateFomated}</p>
                           </div>

                           {data[0].linkToGithub && (
                              <Button classButton="button-colored">
                                 <a
                                    href={data[0].linkToGithub}
                                    target="_blank"
                                    rel="noreferrer"
                                 >
                                    Sur Github
                                 </a>
                              </Button>
                           )}
                        </div>
                     </div>
                  </>
               )}
            </>
         </ChildrenOrLoader>
      </main>
   );
}

export default Project;
