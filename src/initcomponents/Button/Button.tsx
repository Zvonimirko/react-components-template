import clsx from 'clsx';
import { cloneElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from './types';

export const Button = ({
  children,
  className,
  center = true,
  size = 'md',
  typeColor,
  isLoading,
  icon,
  badgeIcon,
  label = 'Button',
  fullWidth = false,
  disabled = false,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={twMerge(
        clsx(
          'inline-flex items-center rounded-md border border-transparent bg-indigo-600 font-medium',
          'text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
          {
            'px-2.5 py-1.5 text-xs': size === 'xs',
            'px-3 py-2 text-sm leading-4': size === 'sm',
            'px-4 py-2 text-sm': size === 'md',
            'px-4 py-2 text-base': size === 'lg',
            'px-6 py-3 text-base': size === 'xl',
            'justify-center': center,
            'w-full flex': fullWidth,
            'inline-flex': !fullWidth,
            'border-transparent bg-success-main hover:bg-green-500': typeColor === 'success',
            'border-transparent bg-red-600 hover:bg-red-700 focus:ring-red-500': typeColor === 'danger',
            'border-transparent bg-orange-400 hover:bg-orange-600 focus:ring-orange-500': typeColor === 'warning',
            'border-transparent bg-white border-solid-4 text-color-700 shadow-none': typeColor === 'info',
            'bg-gray-300 hover:bg-gray-300 cursor-not-allowed': disabled,
          },
          className,
        ),
      )}
      {...otherProps}
    >
      {!isLoading ? (
        <>
          {icon
            ? cloneElement(icon, {
                className: `${icon.props.className} -ml-0.5 mr-2 h-5 w-5}`,
                'aria-hidden': true,
                ...icon.props,
              })
            : undefined}
          {label}
          {badgeIcon &&
            cloneElement(badgeIcon, {
              className: `absolute -top-2 -right-2 text-red-500 w-5 ${badgeIcon.props.className ?? ''}`,
              'aria-hidden': true,
              ...badgeIcon.props,
            })}
        </>
      ) : (
        <svg width="24" height="24">
          <path
            // eslint-disable-next-line max-len
            d="M9.49992 1.66671C7.85174 1.66671 6.24058 2.15545 4.87017 3.07113C3.49976 3.9868 2.43165 5.28829 1.80092 6.81101C1.17019 8.33373 1.00516 10.0093 1.32671 11.6258C1.64825 13.2423 2.44192 14.7272 3.60736 15.8926C4.7728 17.058 6.25766 17.8517 7.87416 18.1733C9.49067 18.4948 11.1662 18.3298 12.6889 17.699C14.2117 17.0683 15.5132 16.0002 16.4288 14.6298C17.3445 13.2594 17.8333 11.6482 17.8333 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="transparent"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              dur="1s"
              from="0 9.5 10"
              to="360 9.5 10"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      )}
    </button>
  );
};
