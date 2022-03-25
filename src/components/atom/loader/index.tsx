import "./index.scss";

type Loaderprops = {
   loaderClass: string;
};

const Loader = ({ loaderClass }: Loaderprops) => {
   return <div className={loaderClass}></div>;
};

export default Loader;
