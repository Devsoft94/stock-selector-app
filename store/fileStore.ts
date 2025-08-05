import { signal } from '@preact/signals-react';
import {
  OiTableData,
  ParsedFileData,
  TableType,
  preTableData,
  tgnlTableData,
} from '@/types';

export const fileSignal = signal<ParsedFileData | null>(null);

export const oiDataSignal = signal<OiTableData | null>(null);
export const preDataSignal = signal<preTableData | null>(null);
export const tgnlDataSignal = signal<tgnlTableData | null>(null);

export const fileDataType = signal<TableType>('na');
