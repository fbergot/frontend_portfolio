import { Link } from "react-router-dom";
import "./index.scss";

type CardProps = {
   id: string;
   imgURL: string;
   name: string;
   from: string;
   index: number;
};

const Card = ({ id, imgURL, name, from, index }: CardProps) => {
   return (
      <article className={`card-${index}`}>
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
