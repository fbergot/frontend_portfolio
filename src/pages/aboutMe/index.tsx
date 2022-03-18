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
            {/* left section */}
            <section>
               <div className="card-presentation">
                  <img src={Me} alt="florian bergot" />
                  <h2>Florian Bergot</h2>
                  <div></div>
                  <p>DÉVELOPPEUR JAVASCRIPT</p>
                  <div className="social"></div>
               </div>
            </section>
            {/* right section */}
            <section>
               <div className="presentation">
                  <p>Hello !</p>
                  <p> Quelques mots sur mon parcours ?</p>
                  <p>
                     Sinon, jetez directement un coup d'oeuil aux projets
                     <span>{String.fromCodePoint(0x1f9d0)}</span>
                  </p>
                  <div className="container-button">
                     <Button
                        triggerFromParent={toggleDisplayJourney}
                        classButton="button first"
                     >
                        Mon parcours
                     </Button>
                     <Button classButton="button-colored">Voir les projets</Button>
                  </div>
                  {displayJourney && (
                     <p className="p-journey">
                        J'ai créé mes premiers codes en octobre 2019, et cela a été une
                        véritable rencontre. J'ai tout de suite su que je voudrais en faire mon
                        métier. Super, joindre l'utile à l'agréable !! J'ai donc étudié en
                        autodidacte pendant un an et demi avant de passer un diplôme de dev web
                        avec Openclassrooms. J'ai eu ce dernier avec les félicitations du jury
                        en janvier 2022 {String.fromCodePoint(0x1f44c)}
                     </p>
                  )}
               </div>
            </section>
         </div>
      </main>
   );
};

export default AboutMe;
