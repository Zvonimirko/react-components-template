export interface ModalProps {
  open?: boolean;
  children?: React.ReactNode;
  containerClassName?: string;
  onBackdropClick?: () => void;
}
