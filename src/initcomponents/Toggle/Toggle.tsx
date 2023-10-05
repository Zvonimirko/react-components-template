import clsx from 'clsx';
import { useController } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { ToggleProps } from './types';

/* eslint-disable max-len */
export const Toggle = ({
  control,
  name,
  bgClass,
  activeBgClass,
  inactiveBgClass,
  handleClass,
  activeHandleClass,
  inactiveHandleClass,
  screenReaderLabel = 'Use setting',
}: ToggleProps) => {
  const {
    field: { onChange, value, ref },
  } = useController({ control, name, defaultValue: false });

  return (
    <button
      type="button"
      className={twMerge(
        clsx(
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
          { [`bg-indigo-600 ${activeBgClass}`]: value },
          { [`bg-gray-200 ${inactiveBgClass}`]: !value },
          bgClass,
        ),
      )}
      role="switch"
      aria-checked={value}
      onClick={() => onChange(!value)}
      ref={ref}
    >
      <span className="sr-only">{screenReaderLabel}</span>
      <span
        aria-hidden="true"
        className={twMerge(
          clsx(
            'pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out',
            { [`ltr:translate-x-5 rtl:-translate-x-5 bg-white ${activeHandleClass}`]: value },
            { [`translate-x-0 bg-white ${inactiveHandleClass}`]: !value },
            handleClass,
          ),
        )}
      />
    </button>
  );
};
