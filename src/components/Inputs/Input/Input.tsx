import clsx from 'clsx';
import { useController } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import { InputProps } from './types';
import React from 'react';

export const Input = ({
  control,
  name,
  widthFull = false,
  className,
  containerClass,
  label,
  labelClass,
  error,
  errorClass,
  errorMessage,
  errorMessageClass,
  success,
  successClass,
  successMessage,
  successMessageClass,
  trailingIcon,
  trailingIconClass,
  leadingIcon,
  leadingIconClass,
  ...otherProps
}: InputProps) => {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({ control, name, defaultValue: '' });

  return (
    <div>
      {label && (
        <label
          htmlFor={otherProps.id}
          className={twMerge(clsx('block text-sm font-medium', labelClass))}
        >
          {label}
        </label>
      )}
      <div
        className={twMerge(
          clsx(
            'relative mt-1 rounded-md shadow-sm',
            { 'w-full': widthFull },
            { 'w-[180px]': !widthFull },
            containerClass
          )
        )}
      >
        <div
          className={twMerge(
            clsx(
              'absolute inset-y-0 left-0 flex items-center pl-3',
              leadingIconClass
            )
          )}
        >
          {leadingIcon}
        </div>
        <input
          type="text"
          className={twMerge(
            clsx(
              'block rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
              'disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500',
              className,
              { 'w-full': widthFull },
              {
                [`border-red-300 text-red-900 focus:border-red-500 focus:outline-none focus:ring-red-500 ${errorClass}`]:
                  error,
              },
              {
                // eslint-disable-next-line max-len
                [`border-green-300 text-green-900 focus:border-green-500 focus:outline-none focus:ring-green-500 ${successClass}`]:
                  success,
              }
            )
          )}
          {...otherProps}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          ref={ref}
        />
        <div
          className={twMerge(
            clsx(
              'absolute inset-y-0 right-0 flex items-center pr-3',
              trailingIconClass
            )
          )}
        >
          {trailingIcon}
        </div>
      </div>
      {errorMessage && (
        <p
          className={twMerge(
            clsx('mt-1 text-sm text-red-600', errorMessageClass)
          )}
        >
          {errorMessage}
        </p>
      )}
      {successMessage && (
        <p
          className={twMerge(
            clsx('mt-1 text-sm text-red-600', successMessageClass)
          )}
        >
          {successMessage}
        </p>
      )}
    </div>
  );
};
