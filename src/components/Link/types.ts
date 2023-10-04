import { LinkProps as RouterLinkProps } from 'react-router-dom';

type Props = RouterLinkProps & React.RefAttributes<HTMLAnchorElement>;
export interface LinkProps extends Props {
  external?: boolean;
}
