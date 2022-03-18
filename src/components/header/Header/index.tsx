import "./index.scss";
import Nav from "../Navigation";

const Header = () => {
   return (
      <header className="header">
         <div className="part-header">
            <div className="name">
               <div className="cube"></div>
               <h1>Florian Bergot</h1>
               <span>/</span>
               <p>PORTFOLIO</p>
            </div>
         </div>
         <div className="part-header nav-division">
            <Nav
               namesOfLinks={["À PROPOS DE MOI", "PROJETS", "CONTACT"]}
               routes={["/", "/projects", "/contact"]}
            />
         </div>
      </header>
   );
};

export default Header;
