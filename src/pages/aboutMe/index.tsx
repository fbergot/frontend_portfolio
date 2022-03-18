import React, { useState } from "react";
import "./index.scss";
import Me from "../../assets/images/flo_bergot.jpg";
import Button from "../../components/button";

const AboutMe = () => {
   const [displayJourney, setDisplayJourney] = useState(false);
   const toggleDisplayJourney = () => {
      setDisplayJourney(!displayJourney);
   };
   return (
      <main>
         <div className="wrapper-sections">
            <section>
               <div className="card-presentation">
                  <img src={Me} alt="florian bergot" />
                  <h2>Florian Bergot</h2>
                  <div></div>
                  <p>DÉVELOPPEUR JAVASCRIPT</p>
                  <div className="social"></div>
               </div>
            </section>
            <section>
               <div className="presentation">
                  <p>Hello !</p>
                  <p> Quelques mots sur mon parcours ?</p>
                  <p>
                     Sinon, jetez directement un coup d'oeuil aux projets
                     <span>{String.fromCodePoint(0x1f9d0)}</span>
                  </p>
                  <div className="container-button">
                     <Button classButton="button-colored">Voir les projets</Button>
                     <Button triggerFromParent={toggleDisplayJourney} classButton="button">
                        Mon parcours
                     </Button>
                  </div>
                  {displayJourney && <p>Ma vie ici ....</p>}
               </div>
            </section>
         </div>
      </main>
   );
};

export default AboutMe;
