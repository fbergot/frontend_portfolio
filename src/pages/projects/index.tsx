import "./index.scss";
import useFetch from "../../utils/hook/useFetch";
import ChildrenOrLoader from "../../components/ChildrenOrLoader";
import { fromNowFormat } from "../../utils/function/utils";
import CardProject from "../../components/Card_project";
import ImagesTechnos from "../../assets/images/images4.jpg";

import { useRef } from "react";

const Projects = () => {
   const URL_projects = "http://localhost:3000/api/project/all";
   const [data, isLoading, error] = useFetch(URL_projects);

   return (
      <main className="main">
         <ChildrenOrLoader isLoading={isLoading} loaderClass="loader-projects">
            <div className="wrapper-sections2">
               <section>
                  <div className="cont-proj">
                     {!error ? (
                        data &&
                        data.map((project, index) => {
                           return (
                              <CardProject
                                 key={project._id}
                                 img={project.imgURL}
                                 name={project.name}
                                 date={project.creationDate}
                                 id={project._id}
                                 index={index}
                              />
                           );
                        })
                     ) : (
                        <p>Une erreur est survenue</p>
                     )}
                  </div>
               </section>
               <div className="img-tech-1"></div>
               <div className="img-tech-2"></div>

               <div className="img-tech-3"></div>
               <div className="img-tech-4"></div>

               <div className="img-tech-5"></div>
               <div className="img-tech-6"></div>

               <div className="img-tech-7"></div>
               <div className="img-tech-8"></div>

               <div className="img-tech-9"></div>
               <div className="img-tech-10"></div>

               <div className="img-tech-11"></div>
               <div className="img-tech-12"></div>

               <div className="img-tech-13"></div>
               <div className="img-tech-14"></div>
               <div className="img-tech-15"></div>
               {/* <img className="img-tech" src={ImagesTechnos} alt="efju" /> */}
            </div>
         </ChildrenOrLoader>
      </main>
   );
};

export default Projects;
