import Loader from "./atom/loader";

type ChildrenOrLoaderProps = {
   children: JSX.Element;
   isLoading: boolean;
};

const ChildrenOrLoader = ({ children, isLoading }: ChildrenOrLoaderProps) => {
   return isLoading ? <Loader /> : children;
};

export default ChildrenOrLoader;
