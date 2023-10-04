import { ChangeEvent } from 'react';
import { CurrencyInputProps as ReactCurrencyInputProps } from 'react-currency-input-field';

export interface CurrencyInputProps extends ReactCurrencyInputProps {
  control: any;
  name: string;
  widthFull?: boolean;
  containerClass?: string;
  label?: string;
  labelClass?: string;
  error?: boolean;
  errorClass?: string;
  errorMessage?: string;
  errorMessageClass?: string;
  trailingIcon?: React.ReactNode;
  trailingIconClass?: string;
  leadingComponent?: React.ReactNode;
  onSelectChange?: (ev: ChangeEvent<HTMLSelectElement>) => void;
}

export interface CountryCurrencyCode {
  name: string;
  code: string;
  symbol: string;
  example: string;
}
