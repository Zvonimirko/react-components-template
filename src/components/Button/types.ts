export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  center?: boolean;
  isLoading?: boolean;
  loadingComponent?: React.ReactNode;
}
