import "./index.scss";
import { Link } from "react-router-dom";

type ButtonProps = {
   classButton: string;
   children: string;
   triggerFromParent?: () => void;
};

const Button = ({ children, classButton, triggerFromParent }: ButtonProps) => {
   if (!triggerFromParent) {
      return (
         <Link className="link-button" to="/projects">
            <div className={classButton}>{children}</div>
         </Link>
      );
   }
   return (
      <div role="button" onClick={() => triggerFromParent()} className={classButton}>
         {children}
      </div>
   );
};

export default Button;
