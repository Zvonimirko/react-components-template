/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ModalProps } from './types';

export const Modal = ({ open, children, containerClassName, onBackdropClick }: ModalProps) => {
  return (
    <div
      className={clsx('relative', { 'opacity-0 invisible z-0': !open }, { 'z-10 visible opacity-100': open })}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onBackdropClick}
    >
      <div
        className={clsx(
          'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity',
          { 'opacity-0': !open },
          { 'opacity-100': open },
        )}
      />

      <div className={clsx('fixed inset-0 overflow-y-auto', { '-z-10': !open }, { 'z-10': open })}>
        <div className="flex min-h-full items-end justify-center sm:items-center">
          <div
            className={twMerge(
              clsx(
                'relative transform overflow-hidden rounded-lg shadow-xl transition-all bg-white',
                { 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95': !open },
                { 'opacity-100 translate-y-0 sm:scale-100': open },
                containerClassName,
              ),
            )}
            onClick={(ev) => ev.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
