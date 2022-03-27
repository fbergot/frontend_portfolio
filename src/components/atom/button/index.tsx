import "./index.scss";
import { Link } from "react-router-dom";

type ButtonProps = {
   classButton: string;
   children: JSX.Element | string;
   triggerFromParent?: () => void;
   to?: string;
};

const Button = ({ children, classButton, triggerFromParent, to }: ButtonProps) => {
   if (!triggerFromParent && to) {
      return (
         <Link className="link-button" to={to}>
            <div className={classButton}>{children}</div>
         </Link>
      );
   } else if (!triggerFromParent && !to) {
      return <div className={classButton}>{children}</div>;
   }
   return (
      <div role="button" onClick={() => triggerFromParent()} className={classButton}>
         {children}
      </div>
   );
};

export default Button;
