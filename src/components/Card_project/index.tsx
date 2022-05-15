import "./card_project.scss";
import { dateFormated } from "../../utils/function/utils";

interface PropsCardProject {
   img: string;
   name: string;
   date: Date;
   id: string;
}

function CardProject({ img, name, date, id }: PropsCardProject) {
   return (
      <article className="cardProjectCont">
         <div className="cardProjectContent">
            <a href={`project/${id}`}>
               <img src={img} alt={name} />
            </a>
            <h2>{name}</h2>
         </div>
      </article>
   );
}

export default CardProject;
