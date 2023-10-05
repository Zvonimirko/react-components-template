import React from 'react';

export interface RadioButtonProps {
  containerClass?: string;
  contentClass?: string;
  activeClass?: string;
  inactiveClass?: string;
  className?: string;
  label?: string;
  labelContainerClass?: string;
  labelClass?: string;
  name?: string;
  control?: any;
  value: string;
  customRadioButton?: boolean;
  customIcon?: React.ReactElement;
  customIconClass?: string;
  customIconDefaultSize?: string;
}

export interface RadioGroupProps {
  children: React.ReactElement<RadioButtonProps>[] | React.ReactElement<RadioButtonProps>;
  control: any;
  name: string;
  containerClass?: string;
  contentClass?: string;
  activeClass?: string;
  inactiveClass?: string;
  className?: string;
  label?: string;
  labelContainerClass?: string;
  labelClass?: string;
  customIcon?: React.ReactElement;
  customIconClass?: string;
  customRadioButton?: boolean;
  customIconDefaultSize?: string;
}
