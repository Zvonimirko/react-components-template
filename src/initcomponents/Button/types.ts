export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  center?: boolean;
  isLoading?: boolean;
  loadingComponent?: React.ReactNode;
  icon?: JSX.Element;
  badgeIcon?: JSX.Element;
  label?: string;
  fullWidth?: boolean;
  typeColor?: 'success' | 'danger' | 'warning' | 'info';
}
