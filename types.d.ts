interface FileStoreType {
  header: string[] | null;
  data: Array<string[]>;
}

interface OiTableRowData {
  symbol: string;
  oiChange: number;
  sector: string | null;
  isFO: boolean;
}
interface PreTableRowData {
  symbol: string;
  open: number;
  change: number;
  sector: string | null;
  isFO: boolean;
}
interface TgnlTableRowData {
  symbol: string;
  ltp: number;
  change: number;
  sector: string | null;
  isFO: boolean;
}

// ============================ Export Types =================================================

export type ParsedFileData = FileStoreType;
export type OiTableRow = OiTableRowData;
export type TableType = 'na' | 'oi' | 'tgnl' | 'pre' | undefined;
export type OiTableData = OiTableRowData[];
export type preTableData = PreTableRowData[];
export type tgnlTableData = TgnlTableRowData[];
