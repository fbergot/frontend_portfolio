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
         <Link to={`/project/${id}`}>
            <img src={imgURL} alt={name} />
            <h2>{name}</h2>
            <p>Créé le {creationDate}</p>
         </Link>
      </article>
   );
};

export default Card;
