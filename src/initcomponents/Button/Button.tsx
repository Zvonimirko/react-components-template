import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from './types';

export const Button = ({ children, className, center = true, size = 'md', ...otherProps }: ButtonProps) => {
  return (
    <button
      type="button"
      className={twMerge(
        clsx(
          'inline-flex items-center rounded-md border border-transparent bg-indigo-600 font-medium',
          'text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
          { 'px-2.5 py-1.5 text-xs': size === 'xs' },
          { 'px-3 py-2 text-sm leading-4': size === 'sm' },
          { 'px-4 py-2 text-sm': size === 'md' },
          { 'px-4 py-2 text-base': size === 'lg' },
          { 'px-6 py-3 text-base': size === 'xl' },
          { 'justify-center': center },
          className,
        ),
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
