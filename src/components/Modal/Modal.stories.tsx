import { useState } from 'react';
import { Modal as BaseModal } from './Modal';
import React from 'react';

export const Modal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BaseModal open={open}>
        <p>This is my test modal</p>
      </BaseModal>
      <button type="button" onClick={() => setOpen(true)}>
        Open
      </button>
    </>
  );
};
