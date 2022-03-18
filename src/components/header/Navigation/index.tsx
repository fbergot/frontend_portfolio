import "./index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

type NavProps = {
   namesOfLinks: string[];
   routes: string[];
};

const Nav = ({ namesOfLinks, routes }: NavProps) => {
   const [actif, setActif] = useState(0);
   const isActif = (index: number, actif: number) => (index === actif ? "actif" : "");
   return (
      <nav className="nav">
         {namesOfLinks.map((name, index) => {
            return (
               <Link
                  key={`linkHeader-${index}`}
                  onClick={() => setActif(index)}
                  className={`nav-link ${isActif(index, actif)}`}
                  to={`${routes[index]}`}
               >
                  {name}
               </Link>
            );
         })}
      </nav>
   );
};

export default Nav;
