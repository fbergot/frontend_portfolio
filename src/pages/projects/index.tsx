import "./index.scss";
import Card from "../../components/Card";
import Image from "../../assets/fake_img/binaire.png";
import Logo from "../../components/atom/logo";

const Projects = () => {
   return (
      <main className="main">
         <div>
            <Logo className="logoTitle" />
            <h1 className="title">Projets</h1>
         </div>
         <div className="cardsContainer">
            <Card id="25" imgURL={Image} name="Projet 1" creationDate="15 décembre" />
            <Card id="25" imgURL={Image} name="Projet 1" creationDate="15 décembre" />
            <Card id="25" imgURL={Image} name="Projet 1" creationDate="15 décembre" />
            <Card id="25" imgURL={Image} name="Projet 1" creationDate="15 décembre" />
            <Card id="25" imgURL={Image} name="Projet 1" creationDate="15 décembre" />
            <Card id="25" imgURL={Image} name="Projet 1" creationDate="15 décembre" />
            <Card id="25" imgURL={Image} name="Projet 1" creationDate="15 décembre" />
            <Card id="25" imgURL={Image} name="Projet 1" creationDate="15 décembre" />
            <Card id="25" imgURL={Image} name="Projet 1" creationDate="15 décembre" />
         </div>
      </main>
   );
};

export default Projects;
