import React, { useState } from "react";
import "./index.scss";
import Me from "../../assets/images/flo_bergot.jpg";
import Button from "../../components/atom/button";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Emoji from "../../components/atom/emoji";

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
                  <div className="social">
                     <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/florian-bergot-b47b4221b"
                     >
                        <BsLinkedin />
                     </a>
                     <a rel="noreferrer" target="_blank" href="https://github.com/fbergot">
                        <BsGithub />
                     </a>
                  </div>
               </div>
            </section>
            {/* right section */}
            <section>
               <div className="presentation">
                  <p>Hello !</p>
                  <p>Quelques mots sur mon parcours ?</p>
                  <p>
                     Sinon, jetez directement un coup d'oeuil aux projets.
                     <Emoji classEmoji="emoji-glasses" codePoint={0x1f9d0} />
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
                     <>
                        <p className="p-journey journey">
                           J'ai découvert le code en octobre 2019. Cela a été une véritable
                           rencontre. J'ai tout de suite su que je voulais en faire mon métier.
                           J'ai donc décidé de me reconvertir et ainsi joindre l'utile à
                           l'agréable !
                        </p>
                        <p className="p2-journey journey">
                           Par la suite, j'ai étudié en autodidacte pendant un an et demi avant
                           de passer un diplôme de dev web avec{" "}
                           <a
                              target="_blank"
                              href="https://openclassrooms.com/fr/"
                              rel="noreferrer"
                           >
                              Openclassrooms
                           </a>
                           . En janvier 2022, j'ai obtenu ce dernier avec les félicitations du
                           jury.
                           <Emoji codePoint={0x1f44c} classEmoji="emoji-finger" />
                           <Emoji codePoint={0x1f4aa} classEmoji="emoji-strong" />
                        </p>
                     </>
                  )}
               </div>
            </section>
         </div>
      </main>
   );
};

export default AboutMe;
