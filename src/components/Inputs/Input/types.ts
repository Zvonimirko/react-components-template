export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onBlur' | 'value' | 'name' | 'ref'> {
  control: any;
  name: string;
  widthFull?: boolean;
  containerClass?: string;
  label?: string;
  labelClass?: string;
  error?: boolean;
  errorClass?: string;
  success?: boolean;
  successClass?: string;
  successMessage?: string;
  successMessageClass?: string;
  errorMessage?: string;
  errorMessageClass?: string;
  trailingIcon?: React.ReactNode;
  trailingIconClass?: string;
  leadingIcon?: React.ReactNode;
  leadingIconClass?: string;
}
