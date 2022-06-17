import "./index.scss";
import Card from "../../components/Card";
import useFetch from "../../utils/hook/useFetch";
import ChildrenOrLoader from "../../components/ChildrenOrLoader";
import { fromNowFormat } from "../../utils/function/utils";

const Projects = () => {
   const URL_projects = "http://localhost:3000/api/project/all";
   const [data, isLoading, error] = useFetch(URL_projects);

   return (
      <main className="main">
         <div className="cardsContainer">
            <ChildrenOrLoader isLoading={isLoading} loaderClass="loader-projects">
               <>
                  {!error
                     ? data &&
                       data.map((project, index) => {
                          return (
                             <Card
                                index={index}
                                key={project._id}
                                id={project._id}
                                imgURL={project.imgURL}
                                name={project.name}
                                from={fromNowFormat(project.creationDate)}
                             />
                          );
                       })
                     : error && <p>Une erreur est survenue: {error}</p>}
               </>
            </ChildrenOrLoader>
         </div>
      </main>
   );
};

export default Projects;
