import "./index.scss";
import Card from "../../components/Card";
import useFetch from "../../utils/hook/useFetch";
import ChildrenOrLoader from "../../components/ChildrenOrLoader";
import moment from "moment";
import momentLoc from "../../utils/moment";

const Projects = () => {
   const URL_projects = "http://localhost:3000/api/project/all";
   const [data, isLoading, error] = useFetch(URL_projects);

   momentLoc();

   if (error) {
      return <p>Une erreur est survenue</p>;
   }

   return (
      <main className="main">
         <div className="cardsContainer">
            <ChildrenOrLoader isLoading={isLoading} loaderClass="loader-projects">
               <>
                  {data &&
                     data.map((project) => {
                        return (
                           <Card
                              key={project._id}
                              id={project._id}
                              imgURL={project.imgURL}
                              name={project.name}
                              from={moment(project.creationDate).fromNow(true)}
                           />
                        );
                     })}
               </>
            </ChildrenOrLoader>
         </div>
      </main>
   );
};

export default Projects;
