import React from 'react';

export interface CheckboxProps {
  control: any;
  name: string;
  label?: string;
  activeClass?: string;
  inactiveClass?: string;
  inputClass?: string;
  labelContainerClass?: string;
  labelClass?: string;
  containerClass?: string;
  contentClass?: string;
  customCheckbox?: boolean;
  customIconClass?: string;
  customIconDefaultSize?: string;
  customIcon?: React.ReactElement;
}
