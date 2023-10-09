/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ArrowSmallDownIcon, ArrowSmallUpIcon } from '@heroicons/react/24/solid';
import {
  Row,
  RowSelectionState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import clsx from 'clsx';
import { Fragment, useEffect, useState } from 'react';

import { twMerge } from 'tailwind-merge';
import { Pagination } from './components/Pagination';
import { MetaData, SortDirection, TableColumn } from './types';

export const Table = <T,>({
  columns,
  data,
  isLoading,
  pagination,
  currentPage,
  noDataText,
  tableClassName,
  containerClassName,
  columnVisibility,
  deselectAllTableRows,
  rowsSelected,
  onRowClick,
  pageClicked,
  pageSizeClicked,
  headerClicked,
  getRowCanExpand,
  setSelectedRows,
  renderSubComponent,
  getRowId,
}: TableProps<T>) => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const table = useReactTable<T>({
    data,
    columns,
    state: {
      rowSelection,
      columnVisibility,
    },
    onRowSelectionChange: (prop) => {
      return setRowSelection(prop);
    },
    getCoreRowModel: getCoreRowModel(),
    getRowCanExpand,
    getExpandedRowModel: getExpandedRowModel(),
    getRowId,
  });

  useEffect(() => {
    if (deselectAllTableRows) {
      table.toggleAllPageRowsSelected(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deselectAllTableRows, rowsSelected]);

  useEffect(() => {
    if (rowsSelected === 0) {
      setRowSelection({});
    }
  }, [rowsSelected]);

  useEffect(() => {
    if (setSelectedRows) setSelectedRows(Object.keys(rowSelection));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowSelection]);

  const onHeaderClicked = (column: any) => {
    if (headerClicked && column.columnDef?.isSortable) {
      const sort = pagination?.sortDirection === SortDirection.Desc ? SortDirection.Asc : SortDirection.Desc;
      headerClicked(column.id, sort);
    }
  };

  return (
    <div
      className={twMerge('flex flex-col relative h-full shadow-lg flex-1 border-gray-200 border rounded-lg', containerClassName)}
    >
      <div
        id="loading-screen"
        className={clsx(isLoading ? 'block' : 'hidden', 'w-full h-full absolute top-0 left-0  opacity-75 z-50')}
      >
        <span
          className={clsx(isLoading ? 'block' : 'hidden', 'text-primary opacity-75 top-1/2 -mt-8 my-0 mx-auto  relative w-0 h-0')}
        >
          <svg
            role="status"
            className="mr-2 w-16 h-16 text-gray-300 animate-spin dark:transparent fill-primary"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              // eslint-disable-next-line max-len
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              // eslint-disable-next-line max-len
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </span>
      </div>

      <div className="overflow-x-auto overflow-y-auto relative flex-1 bg-white flex flex-col rounded-t-lg">
        <table className={twMerge('divide-y divide-gray-200 table-fixed w-full', tableClassName)}>
          <thead className="relative z-[1]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header: any, index) => {
                  return (
                    <th
                      key={header.id}
                      className={clsx(
                        { 'hover:cursor-pointer active:text-gray-400': header.column.isSortable && header.rows.length > 0 },
                        'px-5 py-3 text-left text-sm font-semibold text-gray-600 sticky top-0',
                        'bg-white',
                        { 'text-primary active:text-primary-300': header.column.id === pagination?.sortBy },
                        {
                          'pl-4': index === 0,
                        },
                        columns[index]?.headerClassName,
                      )}
                    >
                      <div
                        className={clsx('flex items-center select-none', columns[index]?.headerLabelClassName)}
                        onClick={() => (table.getRowModel().rows.length > 0 ? onHeaderClicked(header.column) : null)}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {header.column.id === pagination?.sortBy && (
                          <div className="ml-1">
                            {pagination?.sortDirection === 'asc' ? (
                              <ArrowSmallUpIcon className="w-5" />
                            ) : (
                              <ArrowSmallDownIcon className="w-5" />
                            )}
                          </div>
                        )}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>

          <tbody className="divide-y divide-gray-100 bg-white">
            {table.getRowModel().rows.map((row) => {
              return (
                <Fragment key={row.id}>
                  <tr
                    className={clsx({
                      'bg-white': row.index % 2 !== 0,
                      'bg-gray-50': row.index % 2 === 0,
                      'cursor-pointer': !!onRowClick,
                      'hover:bg-zinc-100': !!onRowClick,
                    })}
                    onClick={() => (onRowClick ? onRowClick(row.original) : null)}
                  >
                    {row.getVisibleCells().map((cell, index) => {
                      return (
                        <td
                          key={cell.id}
                          className={clsx(
                            'px-5 py-3 h-14 truncate text-sm',
                            {
                              'pl-4': index === 0,
                            },
                            columns[index]?.cellClassName,
                          )}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      );
                    })}
                  </tr>
                  {row.getIsExpanded() && renderSubComponent && (
                    <tr>
                      <td colSpan={row.getVisibleCells().length}>{renderSubComponent({ row })}</td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>

        {!isLoading && table.getRowModel().rows.length === 0 && (
          <div className="border-t text-center text-gray-400 font-semibold p-6 flex items-center flex-col flex-1 justify-center">
            <img src="/empty_table.svg" alt="No table data" className="w-48 mb-10" />
            {noDataText || 'No table data'}
          </div>
        )}
      </div>

      {data.length > 0 && pagination && currentPage && pageClicked && (
        <Pagination
          currentPage={currentPage}
          pagination={pagination}
          pageClicked={pageClicked}
          pageSizeClicked={pageSizeClicked!}
          key={`${pagination.totalPages}-${pagination.pageSize}`}
          rowsSelected={rowsSelected}
        />
      )}
    </div>
  );
};

type TableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
  currentPage?: number;
  pagination?: MetaData;
  isLoading?: boolean;
  noDataText?: string;
  tableClassName?: string;
  containerClassName?: string;
  columnVisibility?: VisibilityState;
  deselectAllTableRows?: boolean;
  rowsSelected?: number;
  onRowClick?: (row: T) => void;
  pageClicked?: (newPage: number) => void;
  pageSizeClicked?: (newPageSize: number) => void;
  headerClicked?: (accessorKey: string, sortDirection: SortDirection) => void;
  renderSubComponent?: (props: { row: Row<T> }) => React.ReactElement;
  getRowCanExpand?: (row: Row<T>) => boolean;
  setSelectedRows?: (rows: string[]) => void;
  getRowId?: (originalRow: T, index: number, parent?: Row<T> | undefined) => string;
};
