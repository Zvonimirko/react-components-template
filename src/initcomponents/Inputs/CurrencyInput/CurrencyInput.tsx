/* eslint-disable max-len */
import clsx from 'clsx';
import { useController } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import ReactCurrencyInput from 'react-currency-input-field';
import { CurrencyInputProps } from './types';
import { countries } from '../../const';

export const CurrencyInput = ({
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
  trailingIcon,
  trailingIconClass,
  leadingComponent,
  onSelectChange,
  ...otherProps
}: CurrencyInputProps) => {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({ control, name, defaultValue: '' });

  return (
    <div>
      {label && (
        <label htmlFor={otherProps.id} className={twMerge(clsx('block text-sm font-medium', labelClass))}>
          {label}
        </label>
      )}
      <div
        className={twMerge(
          clsx('relative mt-1 rounded-md shadow-sm', { 'w-full': widthFull }, { 'w-[180px]': !widthFull }, containerClass),
        )}
      >
        <div className="absolute inset-y-0 left-0 flex items-center">
          {!leadingComponent && (
            <select
              className="h-full rounded-md border-transparent bg-transparent py-0 pl-3 pr-5 text-gray-500 text-sm focus:border-0 focus:ring-0"
              onChange={onSelectChange}
            >
              {countries.map((c) => (
                <option>{c.currency}</option>
              ))}
            </select>
          )}
          {leadingComponent && leadingComponent}
        </div>

        <ReactCurrencyInput
          type="text"
          className={twMerge(
            clsx(
              'block w-full rounded-md border-gray-300 pl-16 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
              'disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500',
              className,
              { 'w-full': widthFull },
              {
                [`border-red-300 text-red-900 focus:border-red-500 focus:outline-none focus:ring-red-500 ${errorClass}`]: error,
              },
            ),
          )}
          {...otherProps}
          onValueChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          ref={ref}
        />

        <div
          className={twMerge(clsx('pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3', trailingIconClass))}
        >
          {trailingIcon}
        </div>
      </div>
      {errorMessage && <p className={twMerge(clsx('mt-2 text-sm text-red-600', errorMessageClass))}>{errorMessage}</p>}
    </div>
  );
};
