import { usePathname } from "next/navigation";

export const withRouter = <P extends object>(Component: React.ComponentType<P>) => {
  const WithRouterComponent: React.FC<P> = (props) => {
    const router = usePathname();

    return <Component {...props as P} router={{ location: router }} />;
  };

  return WithRouterComponent;
};
