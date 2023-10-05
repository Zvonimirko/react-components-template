import { Children, cloneElement, ReactElement } from 'react';
import { RadioButtonProps, RadioGroupProps } from './types';

export const RadioGroup = ({
  children,
  control,
  name,
  className,
  activeClass,
  containerClass,
  contentClass,
  inactiveClass,
  labelClass,
  labelContainerClass,
  customIcon,
  customIconClass,
  customRadioButton,
  customIconDefaultSize = '16',
}: RadioGroupProps) => {
  return (
    <fieldset>
      {Children.map(children, (child: ReactElement<RadioButtonProps>) => {
        return cloneElement(child, {
          control,
          name,
          className: child.props.className ?? className,
          activeClass: child.props.activeClass ?? activeClass,
          containerClass: child.props.containerClass ?? containerClass,
          contentClass: child.props.contentClass ?? contentClass,
          inactiveClass: child.props.inactiveClass ?? inactiveClass,
          labelClass: child.props.labelClass ?? labelClass,
          labelContainerClass: child.props.labelContainerClass ?? labelContainerClass,
          customIcon: child.props.customIcon ?? customIcon,
          customIconClass: child.props.customIconClass ?? customIconClass,
          customRadioButton: child.props.customRadioButton ?? customRadioButton,
          customIconDefaultSize: child.props.customIconDefaultSize ?? customIconDefaultSize,
        });
      })}
    </fieldset>
  );
};
