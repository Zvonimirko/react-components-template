import React from 'react';
import { ReactDatePickerProps } from 'react-datepicker';

export interface DatePickerProps
  extends Omit<ReactDatePickerProps, 'onChange' | 'onBlur' | 'value' | 'name' | 'ref' | 'placeholderText'> {
  control: any;
  name: string;
  widthFull?: boolean;
  containerClass?: string;
  label?: string;
  labelClass?: string;
  error?: boolean;
  errorMessage?: string;
  errorClass?: string;
  trailingIcon?: React.ReactNode;
  trailingIconClass?: string;
  leadingIcon?: React.ReactNode;
  leadingIconClass?: string;
  currentDayClassName?: string;
  selectedDayClassName?: string;
  daysClassName?: string;
  weekDaysClassName?: string;
  monthDaysClassName?: string;
  cancelButtonClassName?: string;
  applyButtonClassName?: string;
  cancelButtonLabel?: string;
  applyButtonLabel?: string;
  headerButtonLabelsClassName?: string;
  selectedMonthClassName?: string;
  currentMonthClassName?: string;
  monthsClassName?: string;
  doubleIconLeftButtonClassName?: string;
  doubleIconRightButtonClassName?: string;
  calendarHeaderClassName?: string;
  calendarHeaderButtonsClassName?: string;
  calendarHeaderDecreaseYearButtonIcon?: React.ReactNode;
  calendarHeaderDecreaseMonthButtonIcon?: React.ReactNode;
  calendarHeaderIncreaseYearButtonIcon?: React.ReactNode;
  calendarHeaderIncreaseMonthButtonIcon?: React.ReactNode;
  calendarHeaderCurrentMonthClassName?: string;
  placeholder?: string;
  isStories?: boolean; // should be used only DatePicker.stories component
}
