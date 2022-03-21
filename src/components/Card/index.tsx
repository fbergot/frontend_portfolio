import { Link } from "react-router-dom";
import "./index.scss";

type CardProps = {
   id: string;
   imgURL: string;
   name: string;
   creationDate: string;
};

const Card = ({ id, imgURL, name, creationDate }: CardProps) => {
   return (
      <article className="card">
         <Link title={`Description du projet ${name}`} to={`/project/${id}`}>
            <div className="container-img">
               <img src={imgURL} alt={name} />
            </div>
            <div className="title-card-container">
               <h2>{name}</h2>
               <p>Créé le {creationDate}</p>
            </div>
         </Link>
      </article>
   );
};

export default Card;
