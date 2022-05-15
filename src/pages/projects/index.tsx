import "./index.scss";
import Card from "../../components/Card";
import useFetch from "../../utils/hook/useFetch";
import ChildrenOrLoader from "../../components/ChildrenOrLoader";
import { fromNowFormat } from "../../utils/function/utils";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import CardProject from "../../components/Card_project";

const Projects = () => {
   const URL_projects = "http://localhost:3000/api/project/all";
   const [data, isLoading, error] = useFetch(URL_projects);

   return (
      <main className="main">
         <ChildrenOrLoader isLoading={isLoading} loaderClass="loader-projects">
            <div className="wrapper-sections2">
               <section>
                  <div className="cont-proj">
                     {/* first */}
                     {!error ? (
                        data &&
                        data.map((project) => {
                           return (
                              <CardProject
                                 key={project._id}
                                 img={project.imgURL}
                                 name={project.name}
                                 date={project.creationDate}
                                 id={project._id}
                              />
                           );
                        })
                     ) : (
                        <p>Une erreur est survenue</p>
                     )}
                  </div>
               </section>
            </div>
         </ChildrenOrLoader>
      </main>
   );
};

export default Projects;
