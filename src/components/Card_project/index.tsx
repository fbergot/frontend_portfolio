import "./card_project.scss";
import { dateFormated } from "../../utils/function/utils";
import { LinkProjectStyled, ContentDateStyled } from "../../pages/projects/styled.component";
import { useEffect, useRef, useState } from "react";

interface PropsCardProject {
   img: string;
   name: string;
   date: Date;
   id: string;
   index: number;
}

function CardProject({ img, name, date, id, index }: PropsCardProject) {
   const [widthX, setWidthX] = useState("");
   const [widthY, setWidthY] = useState("");

   const card = useRef(null);

   useEffect(() => {
      const clientX = card.current.clientWidth;
      const clientY = card.current.clientHeight;

      setWidthX(clientX);
      setWidthY(clientY);
   }, []);

   return (
      <article ref={card} className="cardProjectCont">
         <div className="cardProjectContent">
            <a href={`project/${id}`}>
               <img src={img} alt={name} />
            </a>
            <h2>{name}</h2>
         </div>
         {widthX && (
            <div>
               <LinkProjectStyled
                  index={index}
                  className="line-proj"
                  widthX={widthX}
                  widthY={widthY}
               />

               <ContentDateStyled
                  index={index}
                  widthX={widthX}
                  widthY={widthY}
                  widthContDate={"100"}
               >
                  <div className="positionContentDate">
                     <p>Créé en:</p>
                     <p>{dateFormated(date, "MMMM YYYY")}</p>
                  </div>
               </ContentDateStyled>

               <LinkProjectStyled
                  index={index}
                  className="line-proj2"
                  widthX={widthX}
                  widthY={widthY}
                  sw={"ok"}
               />
            </div>
         )}
      </article>
   );
}

export default CardProject;
