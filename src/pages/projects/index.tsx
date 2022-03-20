import "./index.scss";
import Card from "../../components/Card";
import Image from "../../assets/fake_img/binaire.png";
import Logo from "../../components/atom/logo";

const Projects = () => {
   return (
      <main>
         <div>
            <div className="containerTitleLogo">
               <Logo className="logoTitle" />
               <h1 className="title">Mes projets</h1>
            </div>
            <p className="description">Description ...</p>
         </div>
         <div className="container">
            <div className="cardsContainer">
               <Card id="25" imgURL={Image} name="Projet 1" creationDate="15 décembre" />
               <Card id="25" imgURL={Image} name="Projet 1" creationDate="15 décembre" />
               <Card id="25" imgURL={Image} name="Projet 1" creationDate="15 décembre" />
               <Card id="25" imgURL={Image} name="Projet 1" creationDate="15 décembre" />
               <Card id="25" imgURL={Image} name="Projet 1" creationDate="15 décembre" />
               <Card id="25" imgURL={Image} name="Projet 1" creationDate="15 décembre" />
            </div>
         </div>
      </main>
   );
};

export default Projects;
