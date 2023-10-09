export enum SortDirection {
  None = '',
  Asc = 'asc',
  Desc = 'desc',
}

export interface MetaData {
  page: number;
  pageSize: number;
  sortBy: string | null;
  sortDirection: SortDirection | null;
  totalRows: number;
  totalPages: number;
}
