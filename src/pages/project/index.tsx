import "./index.scss";
import React from "react";
import useFetch from "../../utils/hook/useFetch";
import { useParams } from "react-router-dom";
import ChildrenOrLoader from "../../components/ChildrenOrLoader";
import addComaIfNotLast from "../../utils/function/addComaIfNotLast";
import Button from "../../components/atom/button";
import { dateFormated } from "../../utils/function/utils";
import { GrProjects, GrTechnology } from "react-icons/gr";
import { BsCalendarDate } from "react-icons/bs";
import { IoArrowBack } from "react-icons/io5";

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
                           <div className="back">
                              <span>
                                 <IoArrowBack />
                              </span>
                              <a href="/projects">Retour aux projets</a>
                           </div>
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
                                 <div className="cont-techAndDate">
                                    <p>
                                       <BsCalendarDate />
                                    </p>
                                    <p className="created-at">Créé en {dateFomated}</p>
                                 </div>
                                 <p className="desc">{data[0].description}</p>
                                 <div>
                                    <div className="cont-icon-technos">
                                       <span className="icon-technos">
                                          <GrTechnology />
                                       </span>
                                       <h3>Technos / skills utilisés:</h3>
                                    </div>
                                    <p className="technos">{techosFormated}</p>
                                 </div>
                              </div>
                           </div>
                        </section>
                        <section className="but-section">
                           {data[0].linkToGithub && (
                              <div className="cont-link">
                                 <Button classButton="button">
                                    <a
                                       className="white-link"
                                       href={data[0].linkToGithub}
                                       target="_blank"
                                       rel="noreferrer"
                                    >
                                       Voir le code sur Github
                                    </a>
                                 </Button>
                              </div>
                           )}

                           {data[0].linkToProject && (
                              <div className="cont-link">
                                 <Button classButton="button-colored">
                                    <a
                                       className="colored-link"
                                       href={data[0].linkToProject}
                                       target="_blank"
                                       rel="noreferrer"
                                    >
                                       Voir le projet hébergé
                                    </a>
                                 </Button>
                              </div>
                           )}
                        </section>
                     </div>
                  </>
               )}
            </>
         </ChildrenOrLoader>
      </main>
   );
}

export default Project;
