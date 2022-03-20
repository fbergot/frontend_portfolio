import "./index.scss";

type LogoProps = {
   className: string;
};

const Logo = ({ className }: LogoProps) => {
   return <span className={className}></span>;
};

export default Logo;
