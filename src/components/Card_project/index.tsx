import "./card_project.scss";
import { dateFormated } from "../../utils/function/utils";

interface PropsCardProject {
   img: string;
   name: string;
   date: Date;
}

function CardProject({ img, name, date }: PropsCardProject) {
   const dateFormat = date && dateFormated(date, "MMMM YYYY");
   return (
      <article className="cardProjectCont">
         <div className="cardProjectContent">
            <img src={img} alt={name} />
            <h2>{name}</h2>
         </div>
      </article>
   );
}

export default CardProject;
