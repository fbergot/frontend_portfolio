import "./index.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

type NavProps = {
   namesOfLinks: string[];
   routes: string[];
};

const Nav = ({ namesOfLinks, routes }: NavProps) => {
   const location = useLocation();
   const [actif, setActif] = useState(0);
   const isActif = (index: number, actif: number) => (index === actif ? "actif" : "");

   useEffect(() => {
      if (location.pathname === "/") {
         setActif(0);
      } else if (location.pathname.startsWith("/project")) {
         setActif(1);
      } else if (location.pathname === "/contact") {
         setActif(2);
      }
   }, [location.pathname]);

   return (
      <nav className="nav">
         {namesOfLinks.map((name, index) => {
            return (
               <Link
                  key={`linkHeader-${index}`}
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
