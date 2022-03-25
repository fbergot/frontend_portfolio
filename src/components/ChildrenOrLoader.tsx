import Loader from "./atom/loader";

type ChildrenOrLoaderProps = {
   children: JSX.Element;
   isLoading: boolean;
   loaderClass: string;
};

const ChildrenOrLoader = ({ children, isLoading, loaderClass }: ChildrenOrLoaderProps) => {
   return isLoading ? <Loader loaderClass={loaderClass} /> : children;
};

export default ChildrenOrLoader;
