import { ColumnDef, Row, VisibilityState } from '@tanstack/react-table';

export interface MetaData {
  page: number;
  pageSize: number;
  sortBy: string | null;
  sortDirection: SortDirection | null;
  totalRows: number;
  totalPages: number;
}

export interface DataWithMeta<T = any> {
  meta: MetaData;
  data: T[];
}

export enum SortDirection {
  None = '',
  Asc = 'asc',
  Desc = 'desc',
}

export type TableColumn<T> = ColumnDef<T> & {
  isSortable?: boolean;
  cellClassName?: string;
  headerClassName?: string;
  headerLabelClassName?: string;
  contentNotTruncated?: boolean;
};

export interface PaginationFilters {
  [key: string]: any;
}

export interface PaginationContext {
  currentPage: number;
  pageSize: number;
  sortBy: string;
  sortDirection: SortDirection;
  search: string;
  debouncedSearch: string;
  filters: PaginationFilters;
  queryFilters?: PaginationFilters;
  onSearchChange: (searchValue: string) => void;
  onPageChange: (newPage: number, params?: { [key: string]: any }) => void;
  onPageSizeChange: (newPageSize: number) => void;
  onSortChange: (accessorKey: string, sort: SortDirection) => void;
  onFiltersChange: (filters: PaginationFilters) => void;
  onQueryFiltersChange?: (filters: PaginationFilters) => void;
  reset: () => void;
}

export type TableProps<T> = {
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
