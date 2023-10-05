import { Link as ReactLink } from 'react-router-dom';
import { LinkProps } from './types';

export const Link = ({ children, external = false, to, target, ...otherProps }: LinkProps) => {
  if (external) {
    return (
      <a href={to.toString()} target={target} rel="noreferrer" {...otherProps}>
        {children}
      </a>
    );
  }
  return (
    <ReactLink to={to} target={target} {...otherProps}>
      {children}
    </ReactLink>
  );
};
