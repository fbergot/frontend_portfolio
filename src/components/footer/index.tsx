import "./index.scss";
import { BiCopyright } from "react-icons/bi";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <footer>
         <div className="first">
            <p>
               <Link to="termsOfUse">Conditions d'utilisation</Link>
            </p>
            <div className="container-copyright">
               <BiCopyright className="copyright" />
               <p>2022 par Florian Bergot</p>
            </div>
         </div>
         <div className="second">
            <div className="content-tel">
               <p className="label-footer">Tel</p>
               <p>06 46 38 14 08</p>
            </div>
            <div className="content-email">
               <p className="label-footer">E-mail</p>
               <p>
                  <a href="mailto:florian.bergot564@gmail.com">florian.bergot564@gmail.com</a>
               </p>
            </div>
            <div className="content-icons">
               <p className="label-footer">En ligne</p>
               <p className="content-icons-inline">
                  <a
                     href="https://www.linkedin.com/in/florian-bergot-b47b4221b"
                     target="_blank"
                     rel="noreferrer"
                  >
                     <BsLinkedin className="inline-icons" />
                  </a>{" "}
                  <a href="https://github.com/fbergot" target="_blank" rel="noreferrer">
                     <BsGithub className="inline-icons" />
                  </a>
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
