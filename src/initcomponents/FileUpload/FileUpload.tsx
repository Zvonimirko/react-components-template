/* eslint-disable max-len */
import clsx from 'clsx';
import { FolderIcon } from '@heroicons/react/24/outline';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useController } from 'react-hook-form';
import { showMessage } from './helpers';
import { MessageType, Props, StorageTypeId } from './types';

export const FileUpload = ({
  name,
  control,
  label,
  error,
  errorMessage,
  addStorageFileFunc,
  successMessage = 'File uploaded successfully',
  failMessage = 'Something went wrong',
  removeLabel = 'Remove',
  dropHereLabel = 'Drop here',
  uploadFileLabel = 'Upload file',
}: Props) => {
  const { field } = useController({
    control,
    name,
  });

  const [isLoading, setIsLoading] = useState(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setIsLoading(true);
      if (acceptedFiles && acceptedFiles.length === 1) {
        const file = acceptedFiles[0];

        try {
          const res = await addStorageFileFunc({ file, type: StorageTypeId.Assets });
          field.onChange(res);
          showMessage(successMessage, MessageType.Success);
        } catch {
          showMessage(failMessage, MessageType.Error);
        }
      }
      setIsLoading(false);
    },
    [addStorageFileFunc, failMessage, field, successMessage],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/zip': ['.zip'] },
    onDropRejected: () => showMessage('File type is not supported', MessageType.Error),
  });

  const removeClicked = (ev: any) => {
    ev.preventDefault();
    field.onChange(null);
  };

  return (
    <div className="flex flex-col flex-1">
      {label && <label className="block mb-1 text-sm font-medium">{label}</label>}
      <div className="flex justify-center rounded-md relative gap-4">
        {field.value ? (
          <div className="group text-center flex flex-col justify-center items-center rounded-lg bg-gray-50 aspect-square w-full h-64 border border-gray-200">
            <FolderIcon className="w-8 h-8 text-secondary-700" />
            <p className="text-gray-500 truncate whitespace-normal">{field.value.name}</p>

            <div className="border border-secondary-800/10 transition-all duration-300 flex group-hover:opacity-100 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-md opacity-0 items-center justify-center rounded-lg">
              <button
                className="bg-primary/10 px-4 transition-colors duration-300 py-2 rounded-full font-semibold text-xs cursor-pointer hover:bg-gray-300/40"
                type="button"
                onClick={removeClicked}
              >
                {removeLabel}
              </button>
            </div>
          </div>
        ) : (
          <div
            {...getRootProps()}
            className={clsx(
              'w-full h-64 border-gray-300 bg-gray-50 border-dashed rounded-xl flex items-center justify-center border-2 transition-colors duration-200 hover:border-secondary-600 hover:cursor-pointer p-2',
              { 'border-red-500 bg-red-50 hover:border-red-500': error },
              { 'border-secondary-700 bg-slate-50': isDragActive },
            )}
          >
            <input {...getInputProps()} />
            {!isLoading ? (
              <>
                {isDragActive && <p className="text-center text-sm text-primary/60">{dropHereLabel}</p>}
                {!isDragActive && (
                  <div className="flex text-center items-center flex-col">
                    <p className="text-sm text-primary/60">{uploadFileLabel}</p>
                  </div>
                )}
              </>
            ) : (
              <svg
                className="animate-spin mb-2 h-12 w-12 text-primary-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            )}
          </div>
        )}
      </div>
      {errorMessage && <p className="mt-2 text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};
