/* eslint-disable max-len */
import clsx from 'clsx';
import React from 'react';
import { useController } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { CheckboxProps } from './types';

export const Checkbox = ({
  label,
  name,
  control,
  containerClass,
  contentClass,
  activeClass,
  inactiveClass,
  inputClass,
  labelContainerClass,
  labelClass,
  customCheckbox,
  customIconClass,
  customIconDefaultSize = '18',
  customIcon,
}: CheckboxProps) => {
  const {
    field: { onChange, value, ref },
  } = useController({ control, name, defaultValue: false });

  if (customCheckbox) {
    return (
      <label className={twMerge(clsx('relative flex items-center', containerClass))}>
        <div
          className={twMerge(
            clsx(
              'bg-white border-gray-300 w-6 flex-shrink-0 h-6 flex justify-center items-center rounded bordercursor-pointer relative overflow-hidden',
              contentClass,
            ),
          )}
        >
          <input type="checkbox" className="hidden [&:checked+svg]:!block [&:checked~div]:!block" />
          {!customIcon ? (
            <svg
              className={twMerge(clsx('hidden w-4 h-4 text-indigo-600 pointer-events-none relative z-10', customIconClass))}
              width={customIconDefaultSize}
              height={customIconDefaultSize}
              viewBox={`0 0 ${customIconDefaultSize} ${customIconDefaultSize}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#box)">
                <path
                  d="M3.75 9.75L6.75 12.75L14.25 5.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="box">
                  <rect width={customIconDefaultSize} height={customIconDefaultSize} fill="purple" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            React.cloneElement(customIcon, {
              className: twMerge(clsx('hidden w-4 h-4 text-indigo-600 pointer-events-none relative z-10', customIconClass)),
            })
          )}
          <div className={twMerge(clsx('hidden absolute inset-0 z-0', activeClass))} />
        </div>

        {label && (
          <div className={twMerge(clsx('ml-3 text-sm leading-5', labelContainerClass))}>
            <span className={twMerge(clsx('text-gray-700', labelClass))}>{label}</span>
          </div>
        )}
      </label>
    );
  }

  return (
    <div className={twMerge(clsx('relative flex items-start', containerClass))}>
      <div className={twMerge(clsx('flex h-5 items-center', contentClass))}>
        <input
          checked={value}
          id={name}
          aria-describedby="comments-description"
          name={name}
          type="checkbox"
          className={twMerge(
            clsx(
              'h-4 w-4 rounded border-gray-300',
              { [` text-indigo-600 focus:ring-indigo-500 ${activeClass}`]: value },
              { [` ${inactiveClass}`]: !value },
              inputClass,
            ),
          )}
          onChange={onChange}
          ref={ref}
        />
      </div>

      {label && (
        <div className={twMerge(clsx('ml-3 text-sm leading-5', labelContainerClass))}>
          <label htmlFor={name} className={twMerge(clsx('text-gray-700', labelClass))}>
            {label}
          </label>
        </div>
      )}
    </div>
  );
};
