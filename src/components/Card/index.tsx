import { Link } from "react-router-dom";
import "./index.scss";

type CardProps = {
   id: string;
   imgURL: string;
   name: string;
   from: string;
};

const Card = ({ id, imgURL, name, from }: CardProps) => {
   return (
      <article className="card">
         <Link title={`Description du projet ${name}`} to={`/project/${id}`}>
            <div className="container-img">
               <img src={imgURL} alt={name} />
            </div>
            <div className="title-card-container">
               <h2>{name}</h2>
               <p>Créé il y a {from}</p>
            </div>
         </Link>
      </article>
   );
};

export default Card;
