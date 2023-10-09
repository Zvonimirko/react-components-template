import { Row, VisibilityState } from '@tanstack/react-table';
import { UseQueryResult } from '@tanstack/react-query';
import { BaseTable } from './BaseTable';
import { DataWithMeta, PaginationContext, TableColumn } from './types';

export const Table = <T,>({
  pagination,
  query,
  columns,
  columnVisibility,
  containerClassName,
  noDataText,
  tableClassName,
  deselectAllTableRows,
  rowsSelected,
  outerLoading,
  onRowClick,
  renderSubComponent,
  getRowCanExpand,
  setSelectedRows,
  getRowId,
}: Props<T>) => {
  const { currentPage, onSortChange, onPageChange, onPageSizeChange } = pagination;
  const { data: collection, isInitialLoading } = query;

  return (
    <BaseTable<T>
      data={collection?.data ?? []}
      pagination={collection?.meta}
      columns={columns}
      currentPage={currentPage}
      isLoading={isInitialLoading || outerLoading}
      onRowClick={onRowClick}
      headerClicked={onSortChange}
      pageClicked={onPageChange}
      pageSizeClicked={onPageSizeChange}
      noDataText={noDataText}
      tableClassName={tableClassName}
      containerClassName={containerClassName}
      renderSubComponent={renderSubComponent}
      getRowCanExpand={getRowCanExpand}
      setSelectedRows={setSelectedRows}
      columnVisibility={columnVisibility}
      deselectAllTableRows={deselectAllTableRows}
      getRowId={getRowId}
      rowsSelected={rowsSelected}
    />
  );
};

interface Props<T> {
  pagination: PaginationContext;
  query: UseQueryResult<DataWithMeta<T>, unknown>;
  columns: TableColumn<T>[];
  noDataText?: string;
  tableClassName?: string;
  containerClassName?: string;
  columnVisibility?: VisibilityState;
  deselectAllTableRows?: boolean;
  rowsSelected?: number;
  outerLoading?: boolean;
  onRowClick?: (row: T) => void;
  renderSubComponent?: (props: { row: Row<T> }) => React.ReactElement;
  getRowCanExpand?: (row: Row<T>) => boolean;
  setSelectedRows?: (rows: string[]) => void;
  getRowId?: (originalRow: T, index: number, parent?: Row<T> | undefined) => string;
}
