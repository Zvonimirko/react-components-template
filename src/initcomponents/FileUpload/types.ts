import { Control } from 'react-hook-form';

export enum StorageTypeId {
  Assets = 1,
  Images = 2,
  Files = 4,
}

export enum MessageType {
  Success,
  Error,
  Warning,
}

export interface Props {
  name: string;
  label?: string;
  control: Control<any, any>;
  errorMessage?: string;
  error: boolean;
  addStorageFileFunc: (data: any) => Promise<any>;
  successMessage?: string;
  failMessage?: string;
  dropHereLabel?: string;
  removeLabel?: string;
  uploadFileLabel?: string;
}
