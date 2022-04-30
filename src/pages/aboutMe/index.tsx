import React, { useCallback, useState } from "react";
import "./index.scss";
import Me from "../../assets/images/florian_bergot-min.png";
import Button from "../../components/atom/button";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Emoji from "../../components/atom/emoji";

const AboutMe = () => {
   const [displayJourney, setDisplayJourney] = useState(false);
   const toggleDisplayJourney = useCallback((displayJourney: boolean) => {
      setDisplayJourney(!displayJourney);
   }, []);
   return (
      <main>
         <div className="wrapper-sections">
            {/* first */}
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
            {/* second*/}
            <section>
               <div className="presentation">
                  <p>Hello !</p>
                  <p>Quelques mots sur mon parcours ?</p>
                  <p>
                     Sinon, jetez directement un coup d'œuil aux projets
                     <Emoji classEmoji="emoji-glasses" codePoint={0x1f9d0} />
                  </p>
                  <div className="container-button">
                     <Button
                        triggerFromParent={() => toggleDisplayJourney(displayJourney)}
                        classButton="button first"
                     >
                        Mon parcours
                     </Button>
                     <Button to="/projects" classButton="button-colored">
                        Voir mes projets
                     </Button>
                  </div>
                  {displayJourney && (
                     <div className="content-journey">
                        <p className="p-journey journey">
                           J'ai découvert le code en octobre 2019. Cela a été une véritable
                           rencontre. J'ai tout de suite su que je voulais en faire mon métier.
                           J'ai donc décidé de me reconvertir et j'ai travaillé dûr pour cela.
                        </p>

                        <p className="p2-journey journey">
                           J'ai donc étudié le code en autodidacte pendant un an et demi avant
                           de passer un diplôme de développeur web avec{" "}
                           <a
                              target="_blank"
                              href="https://openclassrooms.com/fr/"
                              rel="noreferrer"
                           >
                              Openclassrooms
                           </a>
                           . En janvier 2022, j'ai obtenu ce dernier avec les félicitations du
                           jury ! <Emoji codePoint={0x1f44c} classEmoji="emoji-finger" />
                        </p>

                        <p className="p3-journey journey">
                           Je continu à apprendre et à découvrir sur le code tous les jours,
                           que ce soit sur les langages eux mêmes, de nouvelles librairies ou
                           alors des modèles de conceptions logiciel par exemple.
                        </p>

                        <p className="p4-journey journey">
                           Avec le temps, j'ai accumulé de nombreuses connaissances, sur les
                           langages eux mêmes ainsi que sur leurs écosystèmes. J'aime
                           travailler autant sur le frontend que sur le backend.
                        </p>

                        <h3 className="h3-fav-technos">Mes technologies favorites</h3>

                        <p className="p5-journey journey">
                           Dès mes débuts, j'ai adoré le Javascript, mais j'ai voulu aussi
                           découvrir d'autres langages comme PHP et Python. Après cette
                           découverte, je suis revenu vers le JS pour en faire ma spécialité et
                           apprendre le langage en profondeur. C'est mon grand amour{" "}
                           <Emoji classEmoji="love-js" codePoint={0x1f60d} />
                           bien que j'aime aussi utiliser Typescript.
                        </p>

                        <p className="p6-journey journey">
                           <span>Côté Front</span>: Bien-sûr HTML, CSS/SASS. J'utilise Webpack
                           pour le bundle et React est le framework que j'affectionne, je peux
                           utiliser Redux comme state manager. Pour des graphiques, je peux
                           utiliser l'API Canvas ou Chart.js par exemple. Pour tester mon code,
                           j'utilise la librairie de test Jest. Il est à noter aussi que j'ai
                           de bonnes notion en SEO, en optimisation ainsi qu'en accessibilité.
                        </p>

                        <p className="p7-journey journey">
                           <span>Côté Back</span>: Je sais créer des API et des serveurs en
                           utilsant Node.js et express et en appliquant les bonnes pratiques en
                           termes de sécurité. Pour stocker les données, pour le no-SQL c'est
                           MongoDB sinon, c'est MySQL. J'aime aussi utiliser l'ORM Sequelize
                           pour faciliter les intéractions avec la BD. Comme je l'ai mentionné
                           plus haut, j'ai aussi des notions de PHP car j'ai codé avec ce
                           langage pendant quelques mois lors mes débuts. Dans un autre
                           registre, je m'intéresse aussi à Docker, au CI/CD et même au
                           software crafmanship depuis peu{" "}
                           <Emoji classEmoji="love-js" codePoint={0x1f609} />
                        </p>

                        <p className="p8-journey journey">
                           La liste n'est pas exhaustive et est en constante évolution. Les
                           technologies du web évoluent très vite et il faut être très curieux
                           et attentif à leurs changements afin de rester dans le coup.
                        </p>

                        <p className="p9-journey journey">
                           Sinon, je veux vous parler de ce que j'aime faire pour le plaisir:
                           coder des petits jeux en JS. Comme vous pouvez le constater dans
                           l'onglet de mes projets, j'en ai créé plusieurs, dans de différents
                           styles et c'est à chaque fois autant un plaisir à coder que cela me
                           fait travailler mon code. En effet, les jeux sont des très bons
                           moyens de s'améliorer par la pratique. Du coup je join l'utile à
                           l'agréable !!
                        </p>
                     </div>
                  )}
               </div>
            </section>
         </div>
      </main>
   );
};

export default AboutMe;
