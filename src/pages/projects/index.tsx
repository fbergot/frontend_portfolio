import "./index.scss";
import Card from "../../components/Card";
import useFetch from "../../utils/hook/useFetch";
import ChildrenOrLoader from "../../components/ChildrenOrLoader";
import { fromNowFormat } from "../../utils/function/utils";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Me from "../../assets/images/florian_bergot-min.png";


const Projects = () => {
   const URL_projects = "http://localhost:3000/api/project/all";
   const [data, isLoading, error] = useFetch(URL_projects);

   return (
      <main className="main2">
         <div className="wrapper-sections">
            {/* first */}
            <section>
               <div className="card-presentation2">
                  <img src={Me} alt="florian bergot" />
                  <h2>Florian Bergot</h2>
                  <div></div>
                  <p>DÉVELOPPEUR JAVASCRIPT</p>
                  <div className="social">
                     <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/florian-bergot-b47b4221b"
                     >
                        <BsLinkedin />
                     </a>
                     <a rel="noreferrer" target="_blank" href="https://github.com/fbergot">
                        <BsGithub />
                     </a>
                  </div>
               </div>
            </section>
            {/* second*/}
            <section>
               
            </section>
         </div>
         {/* <div className="cardsContainer">
            <ChildrenOrLoader isLoading={isLoading} loaderClass="loader-projects">
               <>
                  {/* {!error ? data &&
                     data.map((project) => {
                        return (
                           <Card
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
         </div> */}
      </main>
   );
};

export default Projects;
