import clsx from 'clsx';
import { cloneElement } from 'react';
import { useController } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { RadioButtonProps } from './types';

export const RadioButton = ({
  control,
  name = '',
  value,
  containerClass,
  contentClass,
  inactiveClass,
  activeClass,
  className,
  label,
  labelClass,
  labelContainerClass,
  customRadioButton,
  customIcon,
  customIconClass,
  customIconDefaultSize,
}: RadioButtonProps) => {
  const {
    field: { onChange, value: formValue, ref, onBlur },
  } = useController({ control, name, defaultValue: '' });

  if (customRadioButton) {
    return (
      <label className={twMerge(clsx('relative flex items-center mb-2 last:mb-0', containerClass))}>
        <div
          className={twMerge(
            clsx(
              'bg-white w-6 flex-shrink-0 h-6 flex justify-center items-center rounded-full cursor-pointer',
              ' relative overflow-hidden',
              { [`${inactiveClass}`]: !value },
              contentClass,
            ),
          )}
        >
          <input
            className="hidden [&:checked+svg]:!block [&:checked~div]:!block"
            name={name}
            onChange={onChange}
            ref={ref}
            value={value}
            onBlur={onBlur}
            type="radio"
            checked={formValue === value}
          />
          {!customIcon ? (
            <svg
              className={twMerge(
                clsx(
                  'hidden w-4 h-4 text-indigo-600 pointer-events-none relative z-10',
                  { [`w-[${customIconDefaultSize}px] h-[${customIconDefaultSize}px]`]: customIconDefaultSize },
                  customIconClass,
                ),
              )}
              height={customIconDefaultSize}
              width={customIconDefaultSize}
              viewBox={`0 0 ${customIconDefaultSize} ${customIconDefaultSize}`}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx={Number(customIconDefaultSize) / 2}
                cy={Number(customIconDefaultSize) / 2}
                r={Number(customIconDefaultSize) / 2}
                fill="currentColor"
              />
            </svg>
          ) : (
            cloneElement(customIcon, {
              className: twMerge(clsx('hidden w-4 h-4 text-indigo-600 pointer-events-none relative z-10', customIconClass)),
            })
          )}
          <div className={twMerge(clsx('hidden rounded-full absolute inset-0 z-0', activeClass))} />
        </div>

        <div className={twMerge(clsx('ml-3 text-sm leading-5', labelContainerClass))}>
          <span className={twMerge(clsx('text-gray-700', labelClass))}>{label}</span>
        </div>
      </label>
    );
  }

  return (
    <div className={twMerge(clsx('relative flex items-start mb-2 last:mb-0', containerClass))}>
      <div className={twMerge(clsx('flex h-5 items-center', contentClass))}>
        <input
          className={twMerge(
            clsx(
              'h-4 w-4 border-gray-300',
              { [`text-indigo-600 focus:ring-indigo-500 ${activeClass}`]: activeClass },
              { [`${inactiveClass}`]: inactiveClass },
              className,
            ),
          )}
          checked={formValue === value}
          type="radio"
          onChange={onChange}
          ref={ref}
          value={value}
          onBlur={onBlur}
          id={name + value}
        />
      </div>

      <div className={twMerge(clsx('ml-3 text-sm leading-5', labelContainerClass))}>
        <label htmlFor={name + value} className={twMerge(clsx('text-gray-700', labelClass))}>
          {label}
        </label>
      </div>
    </div>
  );
};
