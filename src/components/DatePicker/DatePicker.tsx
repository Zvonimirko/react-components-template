import { useState, useRef } from 'react';
import clsx from 'clsx';
import { useController } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import ReactDatePicker from 'react-datepicker';

import { DatePickerProps } from './types';
import React from 'react';

// This is used because monthClassName date always returns same number(selected month) instead of numbers from 0 to 11
let monthClassNameIndex = 0;

export const DatePicker = ({
  control,
  name,
  widthFull = false,
  className,
  containerClass,
  label,
  labelClass,
  error,
  errorMessage,
  errorClass,
  trailingIcon,
  trailingIconClass,
  leadingIcon,
  leadingIconClass,
  dateFormat,
  currentDayClassName,
  selectedDayClassName,
  daysClassName,
  weekDaysClassName,
  monthDaysClassName,
  calendarClassName,
  cancelButtonClassName,
  applyButtonClassName,
  cancelButtonLabel,
  applyButtonLabel,
  previousMonthButtonLabel,
  nextMonthButtonLabel,
  selectedMonthClassName,
  currentMonthClassName,
  monthsClassName,
  onCalendarOpen,
  dayClassName,
  weekDayClassName,
  monthClassName,
  renderCustomHeader,
  children,
  placeholder,
  ...otherProps
}: DatePickerProps) => {
  const {
    field: { onChange, onBlur, value },
  } = useController({ control, name, defaultValue: '' });
  const [firstValue, setFirstValue] = useState('');
  const datepickerRef = useRef<ReactDatePicker>(null);

  const handleCalendarOpen = () => {
    setFirstValue(value);
    if (onCalendarOpen) onCalendarOpen();
  };

  const handleCancelClick = () => {
    onChange(firstValue);
    datepickerRef.current?.setOpen(false);
  };

  const handleApplyClick = () => {
    onChange(value);
    datepickerRef.current?.setOpen(false);
  };

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
              'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
              leadingIconClass
            )
          )}
        >
          {leadingIcon}
        </div>
        <ReactDatePicker
          ref={datepickerRef}
          name={name}
          selected={value}
          onChange={onChange}
          onBlur={onBlur}
          dateFormat={dateFormat ?? 'dd / MM / yyyy'}
          onCalendarOpen={handleCalendarOpen}
          className={twMerge(
            clsx(
              'block rounded-2xl h-11 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm',
              'disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500',
              {
                'w-full': widthFull,
                'pl-10': leadingIcon,
                'pr-10': trailingIcon,
              },
              {
                [`!border-red !text-red !focus:border-red !focus:outline-none !focus:ring-red-500 ${errorClass}`]:
                  error,
              },
              className
            )
          )}
          {...otherProps}
          calendarClassName={twMerge(
            clsx(
              '!p-4 !flex !flex-col !font-sans',
              {
                'datepicker-hide-prev-button-icon': !!previousMonthButtonLabel,
              },
              { 'datepicker-hide-next-button-icon': !!nextMonthButtonLabel },
              calendarClassName
            )
          )}
          dayClassName={(date) => {
            if (dayClassName) {
              return dayClassName(date);
            }
            let dayClass =
              '!w-10 !h-10 sm:!w-11 sm:!h-11 !p-1 !m-0 !text-sm !leading-8 sm:!leading-9 !rounded-2xl';
            let overrideClass = '';
            const currentValue = value;
            if (currentValue) {
              currentValue.setHours(0, 0, 0, 0);
            }
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);
            // if selected date
            if (currentValue && currentValue.getTime() === date.getTime()) {
              dayClass += ' ';
              overrideClass = selectedDayClassName ?? '';
            } else if (date.getTime() === currentDate.getTime()) {
              // if current date
              dayClass += ' ';
              overrideClass = currentDayClassName ?? '';
            } else if (date.getDate() > 0 && date.getDate() < 32) {
              // other dates
              dayClass += ' ';
              overrideClass = daysClassName ?? '';
            }
            return twMerge(clsx(dayClass, overrideClass));
          }}
          weekDayClassName={(date) => {
            if (weekDayClassName) {
              return weekDayClassName(date);
            }
            return twMerge(
              clsx(
                '!w-10 sm:!w-11 !m-0 !mb-4 !text-sm !leading-9',
                weekDaysClassName
              )
            );
          }}
          monthClassName={(date) => {
            if (monthClassName) {
              return monthClassName(date);
            }
            if (monthClassNameIndex > 11) {
              monthClassNameIndex = 0;
            }
            let monthClass = '!rounded-2xl !p-1';
            let overrideClass = '';
            const currentValue = value;
            if (currentValue) {
              currentValue.setHours(0, 0, 0, 0);
            }
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);
            // if selected month
            if (
              currentValue &&
              currentValue.getMonth() === monthClassNameIndex
            ) {
              monthClass += ' ';
              overrideClass = selectedMonthClassName ?? '';
            } else if (
              currentDate &&
              currentDate.getMonth() === monthClassNameIndex &&
              currentDate.getFullYear() === date.getFullYear()
            ) {
              // if current month
              monthClass += ' !font-bold';
              overrideClass = currentMonthClassName ?? '';
            } else {
              // other months
              monthClass += ' ';
              overrideClass = monthsClassName ?? '';
            }
            monthClassNameIndex += 1;
            return twMerge(clsx(monthClass, overrideClass));
          }}
          previousMonthButtonLabel={previousMonthButtonLabel}
          nextMonthButtonLabel={nextMonthButtonLabel}
          renderCustomHeader={renderCustomHeader}
          placeholderText={placeholder}
        >
          {children || (
            <div className="flex items-center justify-center mt-4 pb-1 gap-x-3">
              <button
                type="button"
                onClick={handleCancelClick}
                className={twMerge(
                  clsx(
                    'inline-flex items-center font-medium px-4 py-2 text-sm justify-center rounded-2xl flex-1 h-12',
                    'focus:outline-none focus:ring-indigo-500 focus:ring-0 focus:ring-offset-0 disabled:cursor-not-allowed',
                    cancelButtonClassName
                  )
                )}
              >
                {cancelButtonLabel}
              </button>
              <button
                type="button"
                onClick={handleApplyClick}
                className={twMerge(
                  clsx(
                    'inline-flex items-center font-medium px-4 py-2 text-sm justify-center rounded-2xl flex-1 h-12',
                    'focus:outline-none focus:ring-indigo-500 focus:ring-0 focus:ring-offset-0 disabled:cursor-not-allowed',
                    applyButtonClassName
                  )
                )}
                disabled={!value}
              >
                {applyButtonLabel}
              </button>
            </div>
          )}
        </ReactDatePicker>
        <div
          className={twMerge(
            clsx(
              'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3',
              trailingIconClass
            )
          )}
        >
          {trailingIcon}
        </div>
      </div>
      {errorMessage && <p className="mt-1 text-xs text-red">{errorMessage}</p>}
    </div>
  );
};
