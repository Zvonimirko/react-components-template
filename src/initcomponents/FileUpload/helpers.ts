import { toast } from 'react-toastify';

import { MessageType } from './types';

export const showMessage = (msg: string, type: MessageType) => {
  switch (type) {
    case MessageType.Success:
      toast.success(msg);
      return;
    case MessageType.Error:
      toast.error(msg);
      return;
    case MessageType.Warning:
      toast.warning(msg);
      break;
    default:
  }
};
