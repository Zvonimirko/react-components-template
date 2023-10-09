import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

import { usePagination } from '@mantine/hooks';

import { Button } from 'initcomponents/Button';
import { PageSize } from 'initcomponents/PageSize';
import { MetaData } from './types';

export const Pagination = ({ pagination, currentPage, pageClicked, pageSizeClicked, rowsSelected }: Props) => {
  const { range } = usePagination({
    total: pagination.totalPages,
    page: currentPage,
  });

  // const showing = currentPage * pagination.pageSize - pagination.pageSize + 1;
  // const to = useMemo(() => {
  //   const calculatedTo = currentPage * pagination.pageSize;
  //   if (calculatedTo > pagination.totalRows) {
  //     return pagination.totalRows;
  //   }
  //   return calculatedTo;
  // }, [currentPage, pagination.pageSize, pagination.totalRows]);

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t rounded-b-lg border-gray-200 sm:px-6">
      <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center">
          <p className="text-sm text-gray-700 mr-4">
            {/* Showing <span className="font-medium">{`${JSON.stringify(showing)}`}</span> to&nbsp;
            <span className="font-medium">{`${JSON.stringify(to)}`}</span> of&nbsp; */}
            <span className="font-medium">{`${JSON.stringify(pagination.totalRows)}`}</span> results
          </p>

          <PageSize pageSize={pagination.pageSize} pageSizeClicked={pageSizeClicked} />
          {!!rowsSelected && rowsSelected > 0 && (
            <p className="text-sm ml-2">{`${rowsSelected === 1 ? 'row selected' : 'rows selected'}, ${rowsSelected}`}</p>
          )}
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md" aria-label="Pagination">
            <Button
              onClick={() => pageClicked(currentPage - 1)}
              disabled={currentPage === 1}
              className={clsx(
                'relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium',
                'text-gray-500 hover:bg-gray-50 mr-1',
              )}
              icon={<ChevronLeftIcon className="h-5 w-5" />}
            />
            {range.map((pageNumber, index) => {
              if (pageNumber === 'dots') {
                return (
                  <span
                    className={clsx(
                      'relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm',
                      'font-medium text-gray-700',
                    )}
                    // eslint-disable-next-line react/no-array-index-key
                    key={`dots${index}`}
                  >
                    ...
                  </span>
                );
              }
              return (
                <Button
                  key={pageNumber}
                  onClick={() => pageClicked(pageNumber)}
                  className={clsx(
                    pageNumber === currentPage ? 'z-10 text-white' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
                    'hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium mx-1',
                  )}
                  label={`${pageNumber}`}
                />
              );
            })}

            <Button
              disabled={currentPage === pagination.totalPages}
              onClick={() => pageClicked(currentPage + 1)}
              className={clsx(
                'relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm',
                'font-medium text-gray-500 hover:bg-gray-50 ml-1',
              )}
              icon={<ChevronRightIcon className="h-5 w-5" />}
            />
          </nav>
        </div>
      </div>
    </div>
  );
};

interface Props {
  pagination: MetaData;
  currentPage: number;
  rowsSelected?: number;
  pageClicked: (newPage: number) => void;
  pageSizeClicked: (newPageSize: number) => void;
}
